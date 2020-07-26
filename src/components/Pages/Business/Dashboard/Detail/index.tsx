import { gql, useQuery } from '@apollo/client';
import { format } from 'date-fns';
import { nl as locale } from 'date-fns/locale';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

import styles from './styles.module.css';

const BusinessDetail = () => {
  const { query } = useRouter();
  const { id } = query;
  const { data: businessData } = useQuery(
    gql`
      query($id: String!) {
        business(id: $id) {
          id
          name
          address
          country
          vat
          numberOfContactsToday
          numberOfContactsTotal
          numberOfContactsByDate
        }
      }
    `,
    { variables: { id } },
  );
  const business = useMemo(() => {
    return businessData?.business || null;
  }, [businessData?.business]);

  if (!business?.id) {
    return null;
  }

  return (
    <div className={styles.businessDetail}>
      <h3>{business.name}</h3>
      <h4>{business.address}</h4>
      <div className={styles.exportButtons}>
        {Object.entries(business.numberOfContactsByDate).map(
          ([time, contacts]: [string, any], index: number) => {
            const date = new Date(parseInt(time));

            return (
              <a
                key={`contact-export-${index}`}
                href={`/api/business/${business.id}/export?date=${time}`}
              >
                export {format(date, 'd MMMM yyyy', { locale })}
                <br />({contacts} {contacts === 1 ? 'contact' : 'contacten'})
              </a>
            );
          },
        )}
      </div>
      <div className={styles.trial}>
        ⚠️ U zit momenteel in een gratis proefperiode, deze tool zal
        uiteindelijk <strong>€9.95/maand</strong> kosten. U zal hier ruim
        opvoorhand van worden ingelicht zonder enige verplichting.
      </div>
    </div>
  );
};

export default BusinessDetail;
