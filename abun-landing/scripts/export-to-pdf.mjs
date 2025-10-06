#!/usr/bin/env node
import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import http from 'node:http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.map': 'application/json',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
};

async function startStaticServer(rootDir) {
  return new Promise((resolve, reject) => {
    const server = http.createServer(async (req, res) => {
      try {
        const urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
        let relPath = urlPath;
        let filePath = path.join(rootDir, relPath);

        const tryServe = async (candidate) => {
          try {
            const stats = await fs.stat(candidate);
            if (stats.isFile()) {
              const ext = path.extname(candidate).toLowerCase();
              res.statusCode = 200;
              res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
              res.setHeader('Cache-Control', 'no-cache');
              fsSync.createReadStream(candidate).pipe(res);
              return true;
            }
          } catch {}
          return false;
        };

        if (await tryServe(filePath)) return;
        if (!path.extname(relPath)) {
          if (await tryServe(path.join(rootDir, relPath + '.html'))) return;
          if (await tryServe(path.join(rootDir, relPath, 'index.html'))) return;
        }

        res.statusCode = 404;
        res.end('Not found');
      } catch (err) {
        res.statusCode = 500;
        res.end('Server error');
      }
    });
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const addr = server.address();
      resolve({ server, baseUrl: `http://127.0.0.1:${addr.port}` });
    });
  });
}

async function main() {
  let baseUrl = process.env.EXPORT_BASE_URL;
  const route = process.argv[2] || '/global-trend';
  const out = process.argv[3] || 'GlobalTrend-Homepage-Design.pdf';
  let serverHandle = null;

  if (!baseUrl) {
    const outDir = path.join(process.cwd(), 'out');
    try {
      await fs.access(outDir);
    } catch {
      console.error('Static output not found at ./out. Run "npm run build" first.');
      process.exit(1);
    }
    const started = await startStaticServer(outDir);
    serverHandle = started.server;
    baseUrl = started.baseUrl;
  }

  const url = new URL(route, baseUrl).toString();

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  await page.goto(url, { waitUntil: 'networkidle0', timeout: 120000 });

  // Prefer light theme for print unless overridden by route
  await page.emulateMediaType('screen');

  // Add a small margin so the design breathes in PDF
  await page.pdf({
    path: path.join(process.cwd(), out),
    format: 'A4',
    printBackground: true,
    margin: { top: '12mm', bottom: '12mm', left: '10mm', right: '10mm' },
    preferCSSPageSize: false,
  });

  await browser.close();
  const fullPath = path.join(process.cwd(), out);
  await fs.access(fullPath);
  console.log(`Exported PDF to ${fullPath}`);

  if (serverHandle) {
    await new Promise((r) => serverHandle.close(() => r()));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
