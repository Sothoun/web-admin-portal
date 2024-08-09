// import { isEmpty, isEmptyArray, isNullOrUndefined } from './index';

// Required Validator
const required = (value) =>{
  return v => !!v || `${value} is required`;
};

// Required With Select Multiple
const requiredSelect = (propertyType = 'Field') => {
  return (v) => (v && v.length > 0) || `${propertyType} is required.`;
};

// Email Validator
const email = (value, propertyType = 'Field') => {
  if (isEmpty(value)) return true;
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (Array.isArray(value))
    return value.every((val) => re.test(String(val))) || 'The Email field must be a valid email';

  return re.test(String(value)) || propertyType + ' must be a valid email';
};

export default {
  email,
  required,
  requiredSelect,
};
