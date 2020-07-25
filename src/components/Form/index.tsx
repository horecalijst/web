import React, { FormHTMLAttributes } from 'react';

import Button from './Button';
import Field from './Field';
import Input from './Input';
import InputPrefix from './InputPrefix';
import Label from './Label';

const Form = (props: FormHTMLAttributes<HTMLFormElement>) => {
  return <form {...props} />;
};

Form.Field = Field;
Form.Label = Label;
Form.InputPrefix = InputPrefix;
Form.Input = Input;
Form.Button = Button;

export default Form;
