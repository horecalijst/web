import { useUser } from 'data/user';
import { Cookies, useCookie } from 'hooks/useCookie';
import React, { useCallback } from 'react';

import styles from './styles.module.css';

const BusinessDashboard = () => {
  const [user, setUser] = useUser();
  const [, setValue] = useCookie(Cookies.JWT);

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
        <h2>Zakelijk</h2>
        <div>
          Aangemeld als <strong>{user.email}</strong> (
          <a onClick={onSignoutClick}>afmelden</a>)
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;
