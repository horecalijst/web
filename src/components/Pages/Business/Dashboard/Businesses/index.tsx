import { gql, useQuery } from '@apollo/client';
import { useDidMount } from 'beautiful-react-hooks';
import Table from 'components/Table';
import React, { useMemo } from 'react';

import styles from './styles.module.css';

const BUSINESSES = gql`
  query {
    businesses {
      id
      name
      address
      country
      vat
      numberOfContactsToday
      numberOfContactsTotal
    }
  }
`;

type Business = {
  id: string;
  name: string;
  address: string;
  country: string;
  vat: string;
  numberOfContactsToday: number;
  numberOfContactsTotal: number;
};

const Businesses = () => {
  const { data: businessesData, refetch } = useQuery(BUSINESSES);
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
                  <th>Data exporteren</th>
                </tr>
              </thead>
              <tbody>
                {businesses.map((business: Business, key: string) => {
                  return (
                    <tr key={`business-${key}`}>
                      <td>
                        {business.country}
                        {business.vat.substr(0, 4)}.{business.vat.substr(4, 3)}.
                        {business.vat.substr(7, 3)}
                      </td>
                      <td>{business.name}</td>
                      <td>{business.address}</td>
                      <td>
                        <span className={styles.status}>trial</span>
                      </td>
                      <td>
                        {business.numberOfContactsTotal}
                        {business.numberOfContactsToday
                          ? ` (${business.numberOfContactsToday} vandaag)`
                          : ''}
                      </td>
                      <td>--</td>
                    </tr>
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
