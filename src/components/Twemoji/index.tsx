import React, { ReactNode } from 'react';
import TwemojiLib from 'react-twemoji';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
}

const Twemoji = (props: Props) => {
  const { children } = props;

  return (
    <TwemojiLib options={{ className: styles.twemoji }} noWrapper>
      {children}
    </TwemojiLib>
  );
};

export default Twemoji;
