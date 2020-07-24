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
    <Layout.Content>
      <div className={styles.error}>
        <h1>Er ging iets mis!</h1>
        <p>Probeer het later even opnieuw.</p>
      </div>
    </Layout.Content>
  </Layout>
);

export default Error;
