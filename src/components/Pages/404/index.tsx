import Layout from 'components/Layout';
import Meta from 'components/Meta';
import React from 'react';

const E404 = () => (
  <Layout>
    <Meta
      title="Pagina niet gevonden"
      extra={<meta name="robots" content="noindex, follow" />}
    />
    <Layout.Content>
      <div>
        <h1>Pagina niet gevonden</h1>
        <p>Deze pagina werd niet gevonden.</p>
      </div>
    </Layout.Content>
  </Layout>
);

export default E404;
