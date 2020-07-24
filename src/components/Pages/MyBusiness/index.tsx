import Footer from 'components/Footer';
import Form from 'components/Form';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import React from 'react';

import styles from './styles.module.css';

const Error = () => (
  <Layout>
    <Meta title="Mijn zaak" />
    <Header />
    <Layout.Content>
      <div className={styles.myBusiness}>
        <h2>Mijn zaak</h2>
        <p>U bent restauranthouder of werkt elders in de horeca? Leuk!</p>
        <p>
          Jammer genoeg zijn de voorbije maanden niet makkelijk geweest. De
          bijkomende coronamaatregelen zoals het bijhouden (en het vernietigen)
          van contactgegevens van klanten daar bovenop maken het er ook niet
          eenvoudiger op.
        </p>
        <p>[...]</p>
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

export default Error;
