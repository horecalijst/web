import { useUser } from 'data/user';
import { Cookies, useCookie } from 'hooks/useCookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo } from 'react';

import AddBusiness from './AddBusiness';
import styles from './styles.module.css';

const BusinessDashboard = () => {
  const [user, setUser] = useUser();
  const [, setValue] = useCookie(Cookies.JWT);
  const { pathname } = useRouter();
  const addBusiness = useMemo(() => pathname === '/zakelijk/zaak-toevoegen', [
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
          Aangemeld als <strong>{user.email}</strong> (
          <a onClick={onSignoutClick}>afmelden</a>)
        </div>
      </div>
      <div className={styles.content}>
        {addBusiness && <AddBusiness />}
        {!addBusiness && (
          <>
            <p>U hebt nog geen zaken toegevoegd.</p>
            <br />
            <Link href="/zakelijk/zaak-toevoegen">
              <a className={styles.button}>Nieuwe zaak toevoegen</a>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default BusinessDashboard;
