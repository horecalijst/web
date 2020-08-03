import { gql, useMutation, useQuery } from '@apollo/client';
import cx from 'classnames';
import Form from 'components/Form';
import Twemoji from 'components/Twemoji';
import { format, formatISO, parseISO } from 'date-fns';
import { nl as locale } from 'date-fns/locale';
import { Cookies, useCookie } from 'hooks/useCookie';
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

type Product = {
  id: string;
  description: string;
  value: number;
  currency: string;
};

const BusinessDetail = () => {
  const { query } = useRouter();
  const { id } = query;
  const [jwt] = useCookie(Cookies.JWT);
  const { data: businessData } = useQuery(
    gql`
      query($id: String!) {
        business(id: $id) {
          id
          name
          address
          country
          vat
          daysLeft
          status
          numberOfContactsToday
          numberOfContactsTotal
          numberOfContactsByDate
        }
      }
    `,
    { variables: { id }, pollInterval: 5000 },
  );
  const { data: productData, loading: productsLoading } = useQuery(
    gql`
      query {
        products {
          id
          description
          value
          currency
        }
      }
    `,
  );
  const [
    createOrder,
    { loading: loadingOrder, data: dataOrder },
  ] = useMutation(gql`
    mutation vatLookup($businessId: String!, $productId: String!) {
      createOrder(businessId: $businessId, productId: $productId) {
        externalPaymentLink
      }
    }
  `);
  const [didSubmit, setDidSubmit] = useState(false);
  const [productId, setProductId] = useState('');

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setDidSubmit(true);

      createOrder({ variables: { businessId: id, productId } }).catch(() => {
        alert('Er ging iets mis, probeer het later eens opnieuw.');
        setDidSubmit(false);
      });
    },
    [createOrder, id, productId],
  );

  const products = useMemo(() => {
    return productData?.products || [];
  }, [productData?.products]);

  useEffect(() => {
    if (products.length && !productId) {
      setProductId(products[0].id);
    }
  }, [productId, products]);

  const business = useMemo(() => {
    return businessData?.business || null;
  }, [businessData?.business]);

  useEffect(() => {
    if (dataOrder?.createOrder?.externalPaymentLink) {
      setDidSubmit(false);
      const win = window.open(
        dataOrder?.createOrder?.externalPaymentLink,
        '_blank',
      );
      if (win) {
        win.focus();
      }
    }
  }, [dataOrder]);

  if (!business?.id) {
    return null;
  }

  return (
    <div className={styles.businessDetail}>
      <h3>
        {business.name}

        <span
          className={cx({
            [styles.status]: true,
            [styles.expired]: business.status === 'EXPIRED',
            [styles.trial]: business.status === 'TRIAL',
            [styles.active]: business.status === 'ACTIVE',
          })}
        >
          {business.status === 'TRIAL' && 'Proefperiode'}
          {business.status === 'EXPIRED' && 'Verlopen'}
          {business.status === 'ACTIVE' && 'Actief'}
        </span>
      </h3>
      <h4>{business.address}</h4>
      <div className={styles.exportButtons}>
        {Object.entries<number>(business.numberOfContactsByDate).map(
          ([time, contacts]: [string, number], index: number) => {
            const date = parseISO(time);
            const ISODate = formatISO(date, {
              representation: 'date',
            });

            const downloadUrl =
              process.env.NODE_ENV === 'production'
                ? `/zakelijk/${business.id}/export?date=${ISODate}`
                : `${process.env.NEXT_PUBLIC_API_URL}/businesses/${business.id}/contacts/export?date=${ISODate}&auth=${jwt}`;

            return (
              <a
                key={`contact-export-${index}`}
                href={downloadUrl}
                target="_blank"
                rel="noreferrer"
              >
                export {format(date, 'd MMM yyyy', { locale })}
                <br />({contacts} {contacts === 1 ? 'contact' : 'contacten'})
              </a>
            );
          },
        )}
      </div>
      <Twemoji>
        <div className={styles.notice}>
          ⚠️{' '}
          {business.status === 'EXPIRED' && (
            <strong>
              Uw proefperiode zit erop en u hebt geen krediet meer over.
            </strong>
          )}
          {business.status === 'TRIAL' && <>Uw proefperiode loopt af binnen </>}
          {business.status === 'ACTIVE' && <>Uw zaak heeft nog </>}
          {business.status !== 'EXPIRED' && (
            <strong>
              {business.daysLeft} {business.daysLeft === 1 ? 'dag' : 'dagen'}
            </strong>
          )}
          {business.status === 'ACTIVE' && <> krediet.</>}
          {business.status !== 'ACTIVE' && (
            <>
              {business.status !== 'EXPIRED' ? <>, u</> : ' U '} kan gebruik
              blijven maken van deze service door een extra periode bij te
              kopen.
            </>
          )}{' '}
          Alle <strong>aankopen kunnen worden gecumuleerd</strong> met reeds
          eerdere aankopen en proefperiode.{' '}
          {business.status !== 'EXPIRED' && business.status !== 'ACTIVE' && (
            <>
              Indien u niks doet zal uw horecazaak niet meer selecteerbaar zijn
              voor klanten, u blijft wel toegang hebben tot uw account en data.
            </>
          )}
        </div>
      </Twemoji>
      <Form className={styles.buyProduct} onSubmit={onSubmit}>
        <div className={styles.select}>
          <Form.Select
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setProductId(e.target.value)
            }
          >
            {products.length === 0 ? (
              <option disabled>Producten laden...</option>
            ) : (
              products.map((product: Product, index: number) => (
                <option key={`product-${index}`} value={product.id}>
                  {product.description} ({product.value} {product.currency})
                </option>
              ))
            )}
          </Form.Select>
        </div>
        <Form.Button isLoading={productsLoading || loadingOrder || didSubmit}>
          Afrekenen
        </Form.Button>
      </Form>
    </div>
  );
};

export default BusinessDetail;
