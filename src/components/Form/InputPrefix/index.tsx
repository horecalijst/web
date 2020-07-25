import React, { ReactNode } from 'react';

import styles from './styles.module.css';

interface InputPrefixProps {
  children: string;
}

interface InputPrefixContainerProps {
  children: ReactNode;
}

const InputPrefix = (props: InputPrefixProps) => (
  <div className={styles.inputPrefix} {...props} />
);

const Container = (props: InputPrefixContainerProps) => (
  <div className={styles.inputPrefixContainer} {...props} />
);

InputPrefix.Container = Container;

export default InputPrefix;
