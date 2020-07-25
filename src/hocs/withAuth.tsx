import { gql } from '@apollo/client';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import { NextComponentType, NextPageContext } from 'next';
import React from 'react';
import Cookie from 'services/cookie';
import Network from 'services/network';

const ME = gql`
  query {
    me {
      id
      name
      email
    }
  }
`;

const withAuth = (Component: NextComponentType) => {
  const WrappedComponent = (originalProps: any) => {
    const { user } = originalProps;

    if (!user) {
      return (
        <Layout>
          <Meta
            title="Authenticatie vereist"
            extra={
              <meta key="robots" name="robots" content="noindex, follow" />
            }
          />
          <Layout.Content>
            <h1>Authenticatie vereist</h1>
            <p>Om deze pagina te kunnen bekijken moet je ingelogd zijn.</p>
          </Layout.Content>
        </Layout>
      );
    }

    return <Component {...originalProps} />;
  };

  WrappedComponent.getInitialProps = async (ctx: NextPageContext) => {
    Cookie.init(ctx);

    const { res } = ctx;

    let user = null;
    try {
      const { data } = await Network.apollo.query({ query: ME });
      user = data?.me || null;
    } catch {
      return res?.writeHead(302, { Location: '/zakelijk' }).end();
    }

    if (!user) {
      return res?.writeHead(302, { Location: '/zakelijk' }).end();
    }

    const initialProps = Component?.getInitialProps
      ? await Component?.getInitialProps(ctx)
      : {};

    return {
      user,
      ...initialProps,
    };
  };

  return WrappedComponent;
};

export default withAuth;
