import { Cookies, useCookie } from 'hooks/useCookie';
import React, { MouseEvent } from 'react';

import styles from './styles.module.css';

// 1 year
const maxAge = 1 * 12 * 30 * 24 * 60 * 60;

const CookieBanner = () => {
  const [acknowledgeCookies, setAcknowledgeCookies] = useCookie(
    Cookies.ACKNOWLEDGE_COOKIES,
  );

  if (acknowledgeCookies) {
    return null;
  }

  return (
    <div className={styles.cookieBanner}>
      <p>
        <strong>Deze website maakt gebruik van cookies</strong>
        om de gebruikerservaring te verbeteren en voor analytische doeleinden.
        Door verder te surfen ga je akkoord met het gebruik van cookies.
      </p>
      <button
        className={styles.button}
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setAcknowledgeCookies('true', { maxAge });
        }}
      >
        Ok
      </button>
    </div>
  );
};

export default CookieBanner;
