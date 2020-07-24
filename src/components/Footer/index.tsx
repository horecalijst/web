import Link from 'next/link';
import React from 'react';

import styles from './styles.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p>&copy; 2020 Horecalijst</p>
    <nav>
      <Link href="/gebruiksvoorwaarden">
        <a>Gebruiksvoorwaarden</a>
      </Link>
      <Link href="/privacy">
        <a>Privacy</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  </footer>
);

export default Footer;
