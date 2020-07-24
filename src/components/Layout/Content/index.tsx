import React, { ReactNode } from 'react';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
}

const Content = (props: Props) => {
  const { children } = props;

  return (
    <section role="main" className={styles.content}>
      {children}
    </section>
  );
};

export default Content;
