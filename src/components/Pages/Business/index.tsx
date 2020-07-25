import { gql, useMutation } from '@apollo/client';
import Footer from 'components/Footer';
import Form from 'components/Form';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import { useUser } from 'data/user';
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import BusinessDashboard from './Dashboard';
import styles from './styles.module.css';

const Business = () => {
  const [user] = useUser();
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
      <Header withBackground={!!user} />
      <Layout.Content fullWidth={!!user}>
        <div className={styles.business}>
          {user && <BusinessDashboard />}
          {!user && (
            <>
              <h2>Zakelijk</h2>
              <p>
                Probeer horecalijst nu gratis. Baat u meerdere zaken uit? Deze
                beheert u makkelijk met hetzelfde profiel.
                <span className={styles.break} />
                Gebruik uw email om aan te melden.
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
            </>
          )}
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export default Business;
