import cx from 'classnames';
import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
} from 'react';
import ReactInputMask from 'react-input-mask';

import styles from './styles.module.css';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  hasError?: boolean;
}

const PhoneInput = (props: Props) => {
  const { hasError } = props;

  return (
    <ReactInputMask
      {...(props as any)}
      mask={'+99 999 99 99 99'}
      maskchar={''}
      className={cx({
        [styles.input]: true,
        [styles.error]: hasError,
      })}
    />
  );
};

export default forwardRef<HTMLInputElement, Props>(PhoneInput);
