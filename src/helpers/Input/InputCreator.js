import React from "react";
import {Form, Input} from "antd";
import 'antd/es/form/style/css';
import 'antd/es/input/style/css';

const maxWidth = {width: '100%'};

const createField = (Component, options = {}) => ({style, inputClass, input, meta, children, hasFeedback, label, placeholder, ...rest}) => {
  return (
    <Form.Item
      label={label}
      style={style}
      className={`${options.noErrorIcon ? 'no-error-icon' : ''} ${inputClass}`}
      validateStatus={!meta.touched && !meta.initial ? "" : meta.invalid ? "error" : "success"}
      hasFeedback={hasFeedback}
      help={meta.touched && meta.error}
    >
      <Component label={label} meta={meta} placeholder={placeholder} style={maxWidth} {...input} {...rest}
                 children={children}/>
    </Form.Item>
  );
};

export const CreateTextField = createField(Input);
