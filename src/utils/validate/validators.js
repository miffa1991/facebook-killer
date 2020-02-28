
export const require = values => {
  if(values) return undefined;
  else return 'Required';
}

export const maxLengthReq = (max) => (values) => {
  if (values.length > max) {
    return `max length = ${max}`;
  } else {
    return undefined;
  }
}