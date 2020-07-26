import { gql, useQuery } from '@apollo/client';
import cx from 'classnames';
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
          daysLeft
          status
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
      {business.daysLeft < 8 && (
        <div className={styles.notice}>
          ⚠️{' '}
          {business.status === 'EXPIRED' && (
            <strong>
              Uw proefperiode zit er op en u hebt geen krediet meer over.
            </strong>
          )}
          {business.status === 'TRIAL' && <>Uw proefperiode loopt af binnen </>}
          {business.status === 'ACTIVE' && <>Uw zaak heeft nog </>}
          {business.status !== 'EXPIRED' && (
            <strong>
              {business.daysLeft} {business.daysLeft === 1 ? 'dag' : 'dagen'}
            </strong>
          )}
          {business.status === 'ACTIVE' && <> krediet</>}
          {business.status !== 'EXPIRED' ? <>, u</> : ' U '} kan gebruik blijven
          maken van deze service door een extra periode bij te kopen. Alle{' '}
          <strong>aankopen kunnen worden gecumuleerd</strong> met reeds eerdere
          aankopen en proefperiode.{' '}
          {business.status !== 'EXPIRED' && (
            <>
              Indien u niks doet zal uw horecazaak niet meer selecteerbaar zijn
              voor klanten, u blijft wel toegang hebben tot uw account en data.
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BusinessDetail;
