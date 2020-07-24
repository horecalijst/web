import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import React from 'react';

const Landing = () => (
  <Layout>
    <Meta title="Horecalijst" />
    <Header />
    <Layout.Content>Hello world</Layout.Content>
  </Layout>
);

export default Landing;
