import Footer from 'components/Footer';
import Form from 'components/Form';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import React from 'react';

import HowItWorks from './HowItWorks';
import styles from './styles.module.css';

const Landing = () => (
  <Layout>
    <Meta
      title="Horecalijst"
      description="Op een veilige manier contactgegevens van klanten bijhouden voor 14 dagen zonder al het gedoe? Dan ben je hier bij het juiste adres!"
    />
    <Header />
    <Layout.Content>
      <div className={styles.landing}>
        <div className={styles.data}>
          <h2>
            Op restaurant of café? Laat je gegevens <strong>veilig</strong>{' '}
            achter en draag je steentje bij om Covid-19 in te perken!
          </h2>
          <Form>
            <Form.Field>
              <Form.Label htmlFor="naam">Naam</Form.Label>
              <Form.Input id="naam" name="naam" />
            </Form.Field>
            <Form.Field>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Input id="email" name="email" type="email" />
            </Form.Field>
            <Form.Field>
              <Form.Label htmlFor="phone">Telefoonnummer</Form.Label>
              <Form.Input id="phone" name="phone" type="text" />
            </Form.Field>
            <Form.Field>
              <Form.Label htmlFor="business">Zaak</Form.Label>
              <Form.Input id="business" name="business" type="text" />
            </Form.Field>
            <Form.Field>
              <Form.Button type="submit">Opslaan</Form.Button>
            </Form.Field>

            <div className={styles.disclaimer}>
              ⚠️ Privacy is belangrijk, dat vinden wij ook. Uw gegevens worden
              op een veilige manier bijgehouden en zijn enkel toegangkelijk voor
              autoriteiten op verzoek.{' '}
              <strong>
                Na 14 dagen worden deze gegevens ook weer automatisch
                verwijderd.
              </strong>
            </div>
          </Form>
        </div>
        <HowItWorks />
      </div>
    </Layout.Content>
    <Footer />
  </Layout>
);

export default Landing;
