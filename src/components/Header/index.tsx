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
      <a href="/#hoe-het-werkt">Hoe werkt het?</a>
      <Link href="/mijn-zaak">
        <a>Mijn zaak</a>
      </Link>
    </nav>
  </header>
);

export default Header;
