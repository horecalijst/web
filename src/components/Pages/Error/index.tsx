import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import React from 'react';

import styles from './styles.module.css';

const Error = () => (
  <Layout>
    <Meta
      title="Er ging iets mis!"
      extra={<meta name="robots" content="noindex, follow" />}
    />
    <Header />
    <Layout.Content>
      <div className={styles.error}>
        <h2>Whoops!</h2>
        <p>Dit is vreemd, het lijkt erop dat er iets grondig fout ging!</p>
      </div>
    </Layout.Content>
  </Layout>
);

export default Error;
