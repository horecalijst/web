import cx from 'classnames';
import React, { ReactNode } from 'react';
import Twemoji from 'react-twemoji';

import Content from './Content';
import styles from './styles.module.css';

interface Props {
  children: ReactNode;
  hideOverflow?: boolean;
}

const Layout = (props: Props) => {
  const { children, hideOverflow } = props;

  return (
    <Twemoji options={{ className: styles.twemoji }} noWrapper>
      <div
        className={cx({
          [styles.layout]: true,
          [styles.hideOverflow]: hideOverflow,
        })}
      >
        {children}
      </div>
    </Twemoji>
  );
};

Layout.Content = Content;

export default Layout;
