import { useState, useCallback, useEffect } from 'react';

export const useFormInput = template => {
  const formValues = Object.entries({ ...template });

  let form = {};

  useEffect(() => {
    formValues.forEach(i => (form[i[0]] = i[1]));
  }, [template, form, formValues]);

  const [value, setValue] = useState(form);

  const onChange = useCallback(
    event =>
      setValue({
        ...value,
        [event.currentTarget.name]: event.currentTarget.value
      }),
    [value]
  );
  console.log(value);
  return { value, onChange };
};

export const registerFormTemplate = {
  username: '',
  password: ''
};
