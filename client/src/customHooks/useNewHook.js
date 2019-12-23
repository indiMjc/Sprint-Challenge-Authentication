import { useState } from 'react';

export const useNewFormInput = (template, callback) => {
  const formValues = Object.entries(template);
  let form = {};
  formValues.forEach(i => (form[i[0]] = i[1]));
  const [inputs, setInputs] = useState(form);

  const handleSubmit = (event, cb) => {
    if (event) {
      event.preventDefault();
      if (cb) {
        cb();
      }
    }
  };
  const handleChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.currentTarget.name]: event.currentTarget.value
    }));
  };
  console.log('inp', inputs);
  return {
    handleSubmit,
    handleChange,
    inputs
  };
};

export const registerFormTemplate = {
  username: '',
  password: ''
};
