import { useState, useCallback, useEffect } from 'react';

export const useFormInput = template => {
  const formValues = Object.entries({ ...template });

  let form = {};
  //   console.log('form before loop', form);

  useEffect(() => {
    formValues.forEach(i => (form[i[0]] = i[1]));
  }, [template, form, formValues]);
  //   console.log('form after loop', form);

  const [value, setValue] = useState(form);
  //   console.log('value state object', value);

  const onChange = useCallback(
    event =>
      setValue({
        ...value,
        [event.currentTarget.name]: event.currentTarget.value
      }),
    [value]
  );

  return { value, onChange };
};

export const registerFormTemplate = {
  username: '',
  password: ''
};
