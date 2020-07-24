import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import React from 'react';

import styles from './styles.module.css';

const E404 = () => (
  <Layout>
    <Meta
      title="Pagina niet gevonden"
      extra={<meta name="robots" content="noindex, follow" />}
    />
    <Header />
    <Layout.Content>
      <div className={styles.E404}>
        <h2>404 Niet Gevonden</h2>
        <p>Deze pagina kon niet worden teruggevonden op dit moment.</p>
      </div>
    </Layout.Content>
    <Footer />
  </Layout>
);

export default E404;
