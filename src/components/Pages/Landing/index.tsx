import { gql, useQuery } from '@apollo/client';
import Footer from 'components/Footer';
import Form from 'components/Form';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import React, {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useMemo,
  useState,
} from 'react';

import HowItWorks from './HowItWorks';
import PrivacyDisclaimer from './PrivacyDisclaimer';
import styles from './styles.module.css';

type Business = {
  id: string;
  name: string;
  address: string;
};

const Landing = () => {
  const [enableAutocomplete, setEnableAutocomplete] = useState(false);
  const [business, setBusiness] = useState('');
  const [, setSelectedBusiness] = useState('');
  const [hoveringOverAutocomplete, setHoveringOverAutocomplete] = useState(
    false,
  );
  const { data: businessAutocompleteData } = useQuery(
    gql`
      query businessAutocomplete($q: String!) {
        businessAutocomplete(q: $q) {
          id
          name
          address
        }
      }
    `,
    {
      variables: { q: business },
    },
  );

  const businesses = useMemo(() => {
    if (businessAutocompleteData?.businessAutocomplete) {
      return businessAutocompleteData?.businessAutocomplete || [];
    }

    return [];
  }, [businessAutocompleteData]);

  const businessOnClick = useCallback(
    (business: Business) => (e: MouseEvent<HTMLLIElement>) => {
      {
        e.preventDefault();

        setEnableAutocomplete(false);
        setBusiness(business.name);
        setSelectedBusiness(business.id);
        setHoveringOverAutocomplete(false);
      }
    },
    [],
  );

  return (
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
                <Form.Input
                  id="naam"
                  name="naam"
                  onFocus={() => setEnableAutocomplete(false)}
                />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Input
                  id="email"
                  name="email"
                  type="email"
                  onFocus={() => setEnableAutocomplete(false)}
                />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor="phone">Telefoonnummer</Form.Label>
                <Form.Input
                  id="phone"
                  name="phone"
                  type="text"
                  onFocus={() => setEnableAutocomplete(false)}
                />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor="business">Zaak</Form.Label>
                <div className={styles.autocompleteInput}>
                  <Form.Input
                    id="business"
                    name="business"
                    type="text"
                    value={business}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setBusiness(e.target.value)
                    }
                    onFocus={() => setEnableAutocomplete(true)}
                    onBlur={() => {
                      if (hoveringOverAutocomplete) {
                        return;
                      }

                      setEnableAutocomplete(false);
                    }}
                  />
                </div>
                {enableAutocomplete && businesses.length > 0 && (
                  <div
                    className={styles.autocomplete}
                    onMouseEnter={() => setHoveringOverAutocomplete(true)}
                    onMouseLeave={() => setHoveringOverAutocomplete(false)}
                  >
                    <ul>
                      {businesses.map((business: Business, index: number) => {
                        return (
                          <li
                            key={`business-${index}`}
                            onClick={businessOnClick(business)}
                          >
                            <div className={styles.title}>{business.name}</div>
                            <div className={styles.address}>
                              {business.address}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </Form.Field>
              <Form.Field>
                <Form.Button type="submit">Opslaan</Form.Button>
              </Form.Field>

              <div className={styles.formDisclaimer}>
                <PrivacyDisclaimer />
              </div>

              <div className={styles.formBottomDisclaimer}>
                <PrivacyDisclaimer />
              </div>
            </Form>
          </div>
          <HowItWorks />
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export default Landing;
