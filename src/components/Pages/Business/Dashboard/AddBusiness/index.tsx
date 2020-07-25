import { gql, useMutation } from '@apollo/client';
import Form from 'components/Form';
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
  const [vatNumber, setVatNumber] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [didSubmit, setDidSubmit] = useState(false);
  const [vatLookup, { loading, data }] = useMutation(gql`
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
  const didSubmitSuccesfully = useMemo(() => {
    if (didSubmit !== true) {
      return false;
    }

    return data?.vatLookup !== null;
  }, [data?.vatLookup, didSubmit]);
  const [freezeLookup, setFreezeLookup] = useState(false);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setDidSubmit(true);

      vatLookup({ variables: { vatNumber } }).catch(() => {
        alert('Er ging iets mis, probeer het later eens opnieuw.');
        setDidSubmit(false);
      });
    },
    [vatLookup, vatNumber],
  );

  useEffect(() => {
    if (data?.vatLookup && didSubmitSuccesfully) {
      setVatNumber(data?.vatLookup?.vatNumber);
      setName(data?.vatLookup?.name);
      setAddress(data?.vatLookup?.address);
      setDidSubmit(false);
      setFreezeLookup(true);
    }
  }, [data?.vatLookup, didSubmitSuccesfully]);

  console.log({ vatNumber, name, address });

  return (
    <div className={styles.addBusiness}>
      <h3>Zaak toevoegen</h3>
      <Form className={styles.form} onSubmit={onSubmit}>
        <Form.Field>
          <Form.Label htmlFor="vatNumber">BTW nummer</Form.Label>
          <Form.InputPrefix.Container>
            <Form.InputPrefix htmlFor="vatNumber">BE</Form.InputPrefix>
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
              <Form.Label htmlFor="name">Naam</Form.Label>
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
              <Form.Label htmlFor="name">Adres</Form.Label>
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
          </>
        )}
        <Form.Field>
          <Form.Button type="submit" isLoading={loading}>
            {freezeLookup ? 'Zaak toevoegen' : 'Valideer'}
          </Form.Button>
        </Form.Field>
      </Form>
    </div>
  );
};

export default AddBusiness;
