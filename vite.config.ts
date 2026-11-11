import { defineConfig } from 'vite';
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const SEO_ROUTES = [
  {
    path: '/products/',
    title: 'Hospitality Supplies & Commercial Kitchen Equipment | Care4 Associates',
    description: 'Browse commercial kitchen equipment, crockery, cutlery, linen, guest amenities, housekeeping supplies and cleaning products from Care4 Associates.'
  },
  {
    path: '/about/',
    title: 'About Care4 Associates | Hospitality Supplier in Kerala',
    description: 'Learn about Care4 Associates, a Thiruvananthapuram-based supplier of hospitality, housekeeping and commercial kitchen products across Kerala.'
  },
  {
    path: '/privacy-policy/',
    title: 'Privacy Policy | Care4 Associates',
    description: 'Read how Care4 Associates handles contact, quotation, cookie and analytics information on this website.'
  },
  {
    path: '/terms/',
    title: 'Terms of Use | Care4 Associates',
    description: 'Review the terms for using the Care4 Associates website and submitting product or quotation enquiries.'
  }
];

const staticSeoPages = (): Plugin => ({
  name: 'care4-static-seo-pages',
  apply: 'build',
  async closeBundle() {
    const outputDir = resolve(process.cwd(), 'dist');
    const rootHtml = await readFile(resolve(outputDir, 'index.html'), 'utf8');

    await Promise.all(SEO_ROUTES.map(async ({ path, title, description }) => {
      const canonicalUrl = `https://care4associates.com${path}`;
      const html = rootHtml
        .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
        .replace(/(<meta name="description" content=")[^"]*("\s*\/?>)/, `$1${description}$2`)
        .replace(/(<link rel="canonical" href=")[^"]*("\s*\/?>)/, `$1${canonicalUrl}$2`)
        .replace(/(<meta property="og:title" content=")[^"]*("\s*\/?>)/, `$1${title}$2`)
        .replace(/(<meta property="og:description" content=")[^"]*("\s*\/?>)/, `$1${description}$2`)
        .replace(/(<meta property="og:url" content=")[^"]*("\s*\/?>)/, `$1${canonicalUrl}$2`)
        .replace(/(<meta name="twitter:title" content=")[^"]*("\s*\/?>)/, `$1${title}$2`)
        .replace(/(<meta name="twitter:description" content=")[^"]*("\s*\/?>)/, `$1${description}$2`);
      const pageDir = resolve(outputDir, path.slice(1));
      await mkdir(pageDir, { recursive: true });
      await writeFile(resolve(pageDir, 'index.html'), html);
    }));
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), staticSeoPages()],
  server: {
    port: 3000,
    open: false
  }
});
