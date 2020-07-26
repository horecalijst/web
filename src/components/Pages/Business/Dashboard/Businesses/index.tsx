import { gql, useQuery } from '@apollo/client';
import { useDidMount } from 'beautiful-react-hooks';
import cx from 'classnames';
import Table from 'components/Table';
import Link from 'next/link';
import React, { useMemo } from 'react';

import styles from './styles.module.css';

type Business = {
  id: string;
  name: string;
  address: string;
  country: string;
  vat: string;
  status: string;
  numberOfContactsToday: number;
  numberOfContactsTotal: number;
};

const Businesses = () => {
  const { data: businessesData, refetch } = useQuery(gql`
    query {
      businesses {
        id
        name
        address
        country
        vat
        status
        numberOfContactsToday
        numberOfContactsTotal
      }
    }
  `);
  const businesses = useMemo(() => {
    if (!businessesData?.businesses) {
      return [];
    }

    return businessesData?.businesses || [];
  }, [businessesData]);

  useDidMount(() => {
    refetch();
  });

  return (
    <div className={styles.businesses}>
      {businesses.length === 0 && <p>U hebt nog geen zaken toegevoegd.</p>}
      {businesses.length > 0 && (
        <div className={styles.list}>
          <Table>
            <table>
              <thead>
                <tr>
                  <th>BTW-nummer</th>
                  <th>Naam</th>
                  <th>Adres</th>
                  <th>Status</th>
                  <th>Contacten</th>
                </tr>
              </thead>
              <tbody>
                {businesses.map((business: Business, key: string) => {
                  return (
                    <Link
                      href="/zakelijk/[id]"
                      as={`/zakelijk/${business.id}`}
                      key={`business-${key}`}
                    >
                      <tr>
                        <td>
                          {business.country}
                          {business.vat.substr(0, 4)}.
                          {business.vat.substr(4, 3)}.
                          {business.vat.substr(7, 3)}
                        </td>
                        <td>{business.name}</td>
                        <td>{business.address}</td>
                        <td>
                          <span
                            className={cx({
                              [styles.status]: true,
                              [styles.expired]: business.status === 'EXPIRED',
                              [styles.trial]: business.status === 'TRIAL',
                              [styles.active]: business.status === 'ACTIVE',
                            })}
                          >
                            {business.status}
                          </span>
                        </td>
                        <td>
                          {business.numberOfContactsTotal}
                          {business.numberOfContactsToday
                            ? ` (${business.numberOfContactsToday} vandaag)`
                            : ''}
                        </td>
                      </tr>
                    </Link>
                  );
                })}
              </tbody>
            </table>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Businesses;
