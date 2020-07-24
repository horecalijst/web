import Link from 'next/link';
import React from 'react';

import styles from './styles.module.css';

const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <a className={styles.logo}>
        <img src="/static/icon.svg" alt="" />
        <h1>Horecalijst</h1>
      </a>
    </Link>
    <div></div>
    <nav>
      <Link href="/">
        <a>Mijn zaak</a>
      </Link>
    </nav>
  </header>
);

export default Header;
