import Head from 'next/head';
import { NextRouter, withRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { renderToString } from 'react-dom/server';

interface Props {
  title: string;
  description?: string;
  router: NextRouter;
  extra?: ReactElement;
}

const Meta = (props: Props) => {
  const { title, description, extra, router } = props;

  const url = `${process.env.NEXT_PUBLIC_APP_URL}${
    router.asPath !== '/' ? router.asPath : ''
  }`;

  const extraMetaHtml = extra ? renderToString(extra) : '';
  const extraOgType = extraMetaHtml.indexOf('og:type') > -1;
  const extraOgImage = extraMetaHtml.indexOf('og:image') > -1;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <meta name="robots" content="index, follow" />
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {!extraOgType && <meta property="og:type" content="website" />}
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Horecalijst" />
      {!extraOgImage && (
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_APP_URL}/static/logo-square.jpg`}
        />
      )}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:image"
        content={`${process.env.NEXT_PUBLIC_APP_URL}/static/logo-square.jpg`}
      />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {extra}
      <title>{title}</title>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/favicon-16x16.png`}
      />
      <link rel="icon" type="image/x-icon" href={`favicon.ico`} />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@600;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
};

export default withRouter(Meta);
