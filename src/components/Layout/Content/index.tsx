import cx from 'classnames';
import React, { ReactNode } from 'react';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
  fullWidth?: boolean;
}

const Content = (props: Props) => {
  const { children, fullWidth = false } = props;

  return (
    <section
      role="main"
      className={cx({
        [styles.content]: true,
        [styles.fullWidth]: fullWidth,
      })}
    >
      {children}
    </section>
  );
};

export default Content;
