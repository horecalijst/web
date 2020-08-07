import cx from 'classnames';
import React, {
  DetailedHTMLProps,
  forwardRef,
  Ref,
  SelectHTMLAttributes,
} from 'react';
import { FaAngleDown } from 'react-icons/fa';

import styles from './styles.module.css';

interface Props
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  hasError?: boolean;
}

const Select = (props: Props, ref: Ref<HTMLSelectElement>) => {
  const { hasError } = props;

  return (
    <div
      className={cx({
        [styles.select]: true,
        [styles.error]: hasError,
      })}
    >
      <select {...props} ref={ref} />
      <FaAngleDown />
    </div>
  );
};

export default forwardRef<HTMLSelectElement, Props>(Select);
