import Link from 'next/link';
import React from 'react';

import styles from './styles.module.css';

const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <a className={styles.logo}>
        <img src="/static/logo.png" alt="Horecalijst" />
      </a>
    </Link>
  </header>
);

export default Header;
