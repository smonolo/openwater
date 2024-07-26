import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.openwaterapp.com',
      priority: 1
    }
  ]
}
