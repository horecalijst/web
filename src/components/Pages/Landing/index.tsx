import { gql, useMutation, useQuery } from '@apollo/client';
import { useDidMount, usePreviousValue } from 'beautiful-react-hooks';
import cx from 'classnames';
import Footer from 'components/Footer';
import Form from 'components/Form';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import React, {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { FaTimes } from 'react-icons/fa';
import validateEmail from 'validator/lib/isEmail';
import validatePhone from 'validator/lib/isMobilePhone';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [business, setBusiness] = useState('');
  const [businessId, setBusinessId] = useState('');
  const [contactId, setContactId] = useState('');
  const [didSubmit, setDidSubmit] = useState(false);
  const [hoveringOverAutocomplete, setHoveringOverAutocomplete] = useState(
    false,
  );
  const { data: businessAutocompleteData, refetch } = useQuery(
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
  const previousAutocomplete = usePreviousValue(businessAutocompleteData);
  const [
    addContact,
    { loading: addContactLoading, data: dataAddContact },
  ] = useMutation(gql`
    mutation addContact(
      $name: String
      $phone: String
      $email: String
      $businessId: String!
    ) {
      addContact(
        name: $name
        email: $email
        phone: $phone
        businessId: $businessId
      ) {
        id
      }
    }
  `);

  const businesses = useMemo(() => {
    if (businessAutocompleteData?.businessAutocomplete) {
      return businessAutocompleteData?.businessAutocomplete;
    }

    if (previousAutocomplete?.businessAutocomplete) {
      return previousAutocomplete?.businessAutocomplete;
    }

    return [];
  }, [
    businessAutocompleteData?.businessAutocomplete,
    previousAutocomplete?.businessAutocomplete,
  ]);

  const businessOnClick = useCallback(
    (business: Business) => (e: MouseEvent<HTMLLIElement>) => {
      {
        e.preventDefault();

        setEnableAutocomplete(false);
        setBusiness(business.name);
        setHoveringOverAutocomplete(false);
        setTimeout(() => setBusinessId(business.id), 1);
      }
    },
    [],
  );

  const didSubmitSuccesfully = useMemo(() => {
    if (didSubmit !== true) {
      return false;
    }

    return !!dataAddContact?.addContact;
  }, [dataAddContact?.addContact, didSubmit]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setDidSubmit(true);

      addContact({ variables: { name, email, phone, businessId } }).catch(
        (e) => {
          if (e.message === 'both email & phone are missing') {
            alert('Je moet op zijn minst je email of telefoonnummer opgeven.');
            setDidSubmit(false);
            return;
          }

          if (e.message === 'invalid businessId') {
            alert('Gelieve een zaak uit de dropdown te selecteren.');
            setDidSubmit(false);
            return;
          }

          alert('Er ging iets mis, probeer het later eens opnieuw.');
          setDidSubmit(false);
        },
      );
    },
    [addContact, businessId, email, name, phone],
  );

  useDidMount(refetch);

  useEffect(() => {
    setBusinessId('');
  }, [business]);

  useEffect(() => {
    if (didSubmitSuccesfully) {
      setContactId(dataAddContact?.addContact.id);
    }
  }, [dataAddContact?.addContact.id, didSubmitSuccesfully]);

  useEffect(() => {
    if (phone.length <= 1) {
      return;
    }

    if (phone[0] === '+' || phone[0] === '0') {
      return;
    }

    setPhone(`0${phone}`);
  }, [phone]);

  const onCloseSuccess = () => {
    setDidSubmit(false);
    setEmail('');
    setPhone('');
    setBusinessId('');
    setBusiness('');
    setName('');
    setContactId('');
  };

  return (
    <Layout hideOverflow={!!contactId}>
      <Meta
        title="Horecalijst"
        description="Voor u als horeca-uitbater is het bijhouden van klantgegevens de nieuwste in een steeds langer wordende lijst van coronamaatregelen. Horecalijst neemt deze extra zorg graag van u over, zodat u optimaal kan focussen op uw zaak!"
      />
      <Header />
      <Layout.Content>
        <div className={styles.landing}>
          {contactId && (
            <div className={styles.contactAdded}>
              <a className={styles.closeButton} onClick={onCloseSuccess}>
                <FaTimes />
              </a>
              <div>
                <h2>Geregistreerd!</h2>
                <p>We hebben je gegevens goed ontvangen, relax &amp; geniet!</p>
                <div className={styles.id}>{contactId}</div>
              </div>
            </div>
          )}
          <div className={styles.data}>
            <h2>
              Op restaurant of café? Laat je gegevens <strong>veilig</strong>{' '}
              achter en draag je steentje bij om Covid-19 in te perken!
            </h2>
            <Form onSubmit={onSubmit}>
              <Form.Field>
                <Form.Label htmlFor="naam">Naam</Form.Label>

                <Form.Input
                  id="naam"
                  name="naam"
                  placeholder="Jouw naam"
                  autoComplete="given-name"
                  onFocus={() => setEnableAutocomplete(false)}
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor="email">E-mailadres</Form.Label>
                <div className={styles.inputWrapper}>
                  <div
                    className={cx({
                      [styles.indicator]: true,
                      [styles.progress]: email && !validateEmail(email),
                      [styles.success]: email && validateEmail(email),
                    })}
                  />
                  <Form.Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Jouw e-mailadres"
                    onFocus={() => setEnableAutocomplete(false)}
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                  />
                </div>
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor="phone">GSM-nummer</Form.Label>
                <div className={styles.inputWrapper}>
                  <div
                    className={cx({
                      [styles.indicator]: true,
                      [styles.progress]:
                        phone &&
                        !validatePhone(phone.split(' ').join(''), 'nl-BE'),
                      [styles.success]:
                        phone &&
                        validatePhone(phone.split(' ').join(''), 'nl-BE'),
                    })}
                  />
                  <Form.Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Jouw GSM-nummer"
                    value={phone}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setPhone(e.target.value)
                    }
                  />
                </div>
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor="business">Zaak</Form.Label>
                <div className={styles.inputWrapper}>
                  <div
                    className={cx({
                      [styles.indicator]: true,
                      [styles.progress]: !businessId && business,
                      [styles.success]: businessId,
                    })}
                  />
                  <Form.Input
                    id="business"
                    name="business"
                    type="text"
                    autoComplete="off"
                    placeholder="Naam van aangesloten zaak"
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
                      {businesses.map(
                        (businessItem: Business, index: number) => {
                          const regex = new RegExp(business, 'ig');
                          const matches = regex.exec(businessItem.name);
                          const match = matches
                            ? businessItem.name.replace(
                                regex,
                                `<span>${matches[0]}</span>`,
                              )
                            : businessItem.name;
                          return (
                            <li
                              key={`business-${index}`}
                              onClick={businessOnClick(businessItem)}
                            >
                              <div
                                className={styles.title}
                                dangerouslySetInnerHTML={{ __html: match }}
                              />
                              <div className={styles.address}>
                                {businessItem.address}
                              </div>
                            </li>
                          );
                        },
                      )}
                    </ul>
                  </div>
                )}
              </Form.Field>
              <Form.Field>
                <Form.Button type="submit" isLoading={addContactLoading}>
                  Opslaan
                </Form.Button>
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
