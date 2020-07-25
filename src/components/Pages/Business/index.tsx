import { gql, useMutation } from '@apollo/client';
import Footer from 'components/Footer';
import Form from 'components/Form';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import styles from './styles.module.css';

const Business = () => {
  const [createAuthenticationRequest, { loading, data }] = useMutation(gql`
    mutation createAuthenticationRequest($email: String!) {
      createAuthenticationRequest(email: $email)
    }
  `);
  const [email, setEmail] = useState('');
  const [didSubmit, setDidSubmit] = useState(false);
  const didSubmitSuccesfully = useMemo(() => {
    if (didSubmit !== true) {
      return false;
    }

    return data?.createAuthenticationRequest === true;
  }, [data?.createAuthenticationRequest, didSubmit]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setDidSubmit(true);

      createAuthenticationRequest({ variables: { email } }).catch(() => {
        alert('Er ging iets mis, probeer het later eens opnieuw.');
        setDidSubmit(false);
      });
    },
    [createAuthenticationRequest, email],
  );

  useEffect(() => {
    if (didSubmitSuccesfully) {
      alert('We hebben jou een mailtje gestuurd! Hiermee kan je inloggen.');

      setEmail('');
      setDidSubmit(false);
    }
  }, [didSubmitSuccesfully]);

  return (
    <Layout>
      <Meta title="Zakelijk" />
      <Header />
      <Layout.Content>
        <div className={styles.business}>
          <h2>Zakelijk</h2>
          <p>
            Horecauitbater? Meld je aan en probeer het nu gratis!
            <span className={styles.break} />
            Eens u bent aangemeld kan u 1 of meerdere zaken toevoegen &amp;
            beheren.
          </p>
          <br />
          <Form className={styles.form} onSubmit={onSubmit}>
            <Form.Field>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </Form.Field>
            <Form.Field>
              <Form.Button type="submit" isLoading={loading}>
                Aanmelden
              </Form.Button>
            </Form.Field>
          </Form>
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export default Business;
