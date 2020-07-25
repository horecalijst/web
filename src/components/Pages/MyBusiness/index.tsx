import Footer from 'components/Footer';
import Form from 'components/Form';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import React from 'react';

import styles from './styles.module.css';

const MyBusiness = () => (
  <Layout>
    <Meta title="Mijn zaak" />
    <Header />
    <Layout.Content>
      <div className={styles.myBusiness}>
        <h2>Mijn zaak</h2>
        <p>
          Meld je aan en probeer het gratis. Eens u bent aangemeld kan u 1 of
          meerdere zaken toevoegen.
        </p>
        <br />
        <Form className={styles.form}>
          <Form.Field>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Input id="email" name="email" type="email" />
          </Form.Field>
          <Form.Field>
            <Form.Button type="submit">Aanmelden</Form.Button>
          </Form.Field>
        </Form>
      </div>
    </Layout.Content>
    <Footer />
  </Layout>
);

export default MyBusiness;
