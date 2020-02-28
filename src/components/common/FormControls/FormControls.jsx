import React from 'react';

export const Input = ({input, meta, ...props}) => {
  debugger
  let hasError = meta.touched && meta.error;
  return (
    <div>
      <input {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}