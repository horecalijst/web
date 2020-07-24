import { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream } from 'sitemap';
import { createGzip } from 'zlib';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Content-Encoding', 'gzip');

  const sitemap = new SitemapStream({
    hostname: process.env.NEXT_PUBLIC_APP_URL,
  });
  const pipeline = sitemap.pipe(createGzip());

  // static
  sitemap.write({ url: '/', priority: 1 });

  sitemap.end();

  pipeline.pipe(res).on('error', (e) => {
    throw e;
  });
};
