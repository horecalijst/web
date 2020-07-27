import { gql, useMutation } from '@apollo/client';
import Form from 'components/Form';
import Twemoji from 'components/Twemoji';
import { useRouter } from 'next/router';
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import styles from './styles.module.css';

const AddBusiness = () => {
  const { push } = useRouter();
  const [vatNumber, setVatNumber] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [didSubmit, setDidSubmit] = useState(false);
  const [
    vatLookup,
    { loading: loadingVatLookup, data: dataVatLookup },
  ] = useMutation(gql`
    mutation vatLookup($vatNumber: String!) {
      vatLookup(vat: $vatNumber) {
        countryCode
        vatNumber
        valid
        name
        address
      }
    }
  `);
  const [
    addBusiness,
    { loading: loadingAddBusiness, data: dataAddBusiness },
  ] = useMutation(gql`
    mutation addBusiness(
      $name: String!
      $address: String!
      $vatNumber: String!
      $countryCode: String!
    ) {
      addBusiness(
        name: $name
        address: $address
        vat: $vatNumber
        country: $countryCode
      ) {
        id
      }
    }
  `);
  const didSubmitSuccesfully = useMemo(() => {
    if (didSubmit !== true) {
      return false;
    }

    return dataVatLookup?.vatLookup !== null;
  }, [dataVatLookup?.vatLookup, didSubmit]);
  const [freezeLookup, setFreezeLookup] = useState(false);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setDidSubmit(true);

      if (name && address && vatNumber && countryCode) {
        addBusiness({
          variables: { name, address, vatNumber, countryCode },
        }).catch(() => {
          alert('Er ging iets mis, probeer het later eens opnieuw.');
          setDidSubmit(false);
        });
      } else {
        vatLookup({ variables: { vatNumber } }).catch(() => {
          alert('Er ging iets mis, probeer het later eens opnieuw.');
          setDidSubmit(false);
        });
      }
    },
    [addBusiness, address, countryCode, name, vatLookup, vatNumber],
  );

  useEffect(() => {
    if (didSubmitSuccesfully && !loadingAddBusiness && !loadingVatLookup) {
      setDidSubmit(false);
    }
  }, [didSubmitSuccesfully, loadingAddBusiness, loadingVatLookup]);

  useEffect(() => {
    if (didSubmitSuccesfully && !loadingVatLookup) {
      if (dataVatLookup?.vatLookup?.valid) {
        setVatNumber(dataVatLookup?.vatLookup?.vatNumber);
        setName(dataVatLookup?.vatLookup?.name);
        setAddress(dataVatLookup?.vatLookup?.address);
        setCountryCode(dataVatLookup?.vatLookup?.countryCode);
        setFreezeLookup(true);
      } else {
        alert('De onderneming met dit BTW nummer lijkt niet (meer) actief.');
      }
    }
  }, [
    dataVatLookup?.vatLookup?.address,
    dataVatLookup?.vatLookup?.countryCode,
    dataVatLookup?.vatLookup?.name,
    dataVatLookup?.vatLookup?.valid,
    dataVatLookup?.vatLookup?.vatNumber,
    didSubmitSuccesfully,
    loadingVatLookup,
  ]);

  useEffect(() => {
    if (didSubmitSuccesfully && !loadingAddBusiness) {
      if (dataAddBusiness?.addBusiness?.id) {
        push('/zakelijk');
      }
    }
  }, [
    dataAddBusiness?.addBusiness,
    dataAddBusiness?.addBusiness?.id,
    didSubmitSuccesfully,
    loadingAddBusiness,
    push,
  ]);

  return (
    <div className={styles.addBusiness}>
      <h3>Zaak toevoegen</h3>
      <Form className={styles.form} onSubmit={onSubmit}>
        <Form.Field>
          <Form.Label htmlFor="vatNumber">BTW nummer</Form.Label>
          <Form.InputPrefix.Container>
            <Form.InputPrefix>BE</Form.InputPrefix>
            <Form.Input
              id="vatNumber"
              name="vatNumber"
              type="text"
              maxLength={12}
              value={vatNumber}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setVatNumber(e.target.value)
              }
              readOnly={freezeLookup}
            />
          </Form.InputPrefix.Container>
        </Form.Field>
        {freezeLookup && (
          <>
            <Form.Field>
              <Form.Label htmlFor="name">
                Naam <span className={styles.note}>*</span>
              </Form.Label>
              <Form.Input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor="name">
                Adres <span className={styles.note}>*</span>
              </Form.Label>
              <Form.Input
                id="address"
                name="address"
                type="text"
                value={address}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setAddress(e.target.value)
                }
              />
            </Form.Field>
            <p className={styles.note}>
              * Deze gegevens zullen zichtbaar zijn wanneer klanten op uw zaak
              zoeken in de vorm van een autocomplete.
            </p>
            <br />
          </>
        )}
        <Form.Field>
          <Form.Button
            type="submit"
            isLoading={loadingVatLookup || loadingAddBusiness}
          >
            {freezeLookup ? 'Zaak toevoegen' : 'Valideren'}
          </Form.Button>
        </Form.Field>
      </Form>
      <Twemoji>
        <div className={styles.notice}>
          ⚠️ U kan deze tool vrijblijvend 1 week gratis uit proberen,{' '}
          <strong>geen verplichtingen of stilzwijgende verlengingen</strong>.
        </div>
      </Twemoji>
    </div>
  );
};

export default AddBusiness;
