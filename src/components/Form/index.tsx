import React, { FormHTMLAttributes } from 'react';

import Button from './Button';
import Field from './Field';
import Input from './Input';
import InputPrefix from './InputPrefix';
import Label from './Label';
import Select from './Select';

const Form = (props: FormHTMLAttributes<HTMLFormElement>) => {
  return <form {...props} />;
};

Form.Field = Field;
Form.Label = Label;
Form.InputPrefix = InputPrefix;
Form.Input = Input;
Form.Select = Select;
Form.Button = Button;

export default Form;
