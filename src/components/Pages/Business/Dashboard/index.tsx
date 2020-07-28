import { useUser } from 'data/user';
import { Cookies, useCookie } from 'hooks/useCookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo } from 'react';

import AddBusiness from './AddBusiness';
import Businesses from './Businesses';
import BusinessDetail from './Detail';
import styles from './styles.module.css';

const BusinessDashboard = () => {
  const [user, setUser] = useUser();
  const [, setValue] = useCookie(Cookies.JWT);
  const { pathname } = useRouter();
  const addBusiness = useMemo(() => pathname === '/zakelijk/zaak-toevoegen', [
    pathname,
  ]);
  const businessDetail = useMemo(() => pathname === '/zakelijk/[id]', [
    pathname,
  ]);

  const onSignoutClick = useCallback(() => {
    setValue('', { maxAge: -1 });
    setUser(null);
  }, [setUser, setValue]);

  if (!user) {
    return null;
  }

  return (
    <div className={styles.businessDashboard}>
      <div className={styles.heading}>
        <Link href="/zakelijk">
          <h2>Zakelijk</h2>
        </Link>
        <div className={styles.spacer} />
        <div>
          <span>
            Aangemeld als <strong>{user.email}</strong> (
          </span>
          <a onClick={onSignoutClick}>afmelden</a>
          <span>)</span>
        </div>
      </div>
      <div className={styles.content}>
        {addBusiness && <AddBusiness />}
        {!addBusiness && !businessDetail && (
          <>
            <Businesses />
            <br />
            <Link href="/zakelijk/zaak-toevoegen">
              <a className={styles.button}>Nieuwe zaak toevoegen</a>
            </Link>
          </>
        )}
        {businessDetail && <BusinessDetail />}
      </div>
    </div>
  );
};

export default BusinessDashboard;
