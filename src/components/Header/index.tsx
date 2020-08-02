import cx from 'classnames';
import CookieBanner from 'components/CookieBanner';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.css';

interface Props {
  withBackground?: boolean;
}

const Header = ({ withBackground }: Props = { withBackground: false }) => (
  <>
    <CookieBanner />
    <header
      className={cx({
        [styles.header]: true,
        [styles.withBackground]: withBackground,
      })}
    >
      <Link href="/">
        <a className={styles.logo}>
          <img src="/static/icon.svg" alt="" />
          <h1>Horecalijst</h1>
        </a>
      </Link>
      <div></div>
      <nav>
        <a href="/#hoe-het-werkt">Hoe werkt het?</a>
        <Link href="/zakelijk">
          <a>Zakelijk</a>
        </Link>
      </nav>
    </header>
  </>
);

export default Header;
