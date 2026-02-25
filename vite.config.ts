import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const siteUrl = process.env.VITE_SITE_URL || 'https://sulabhkatila.github.io'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'seo-files',
      closeBundle() {
        const outDir = join(process.cwd(), 'dist')
        const base = (this as any).config?.build?.base ?? '/'
        const origin = siteUrl.replace(/\/$/, '')
        const root = base === '/' ? origin : `${origin}${base.replace(/\/$/, '')}`

        const robots = `User-agent: *
Allow: /

Sitemap: ${root}/sitemap.xml
`
        const lastmod = new Date().toISOString().slice(0, 10)
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${root}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`

        mkdirSync(outDir, { recursive: true })
        writeFileSync(join(outDir, 'robots.txt'), robots)
        writeFileSync(join(outDir, 'sitemap.xml'), sitemap)
      },
    },
  ],
})
