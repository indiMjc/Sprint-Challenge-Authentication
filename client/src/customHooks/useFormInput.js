import { useState, useCallback, useEffect } from 'react';

// export const useFormInput = template => {
//   const [value, setValue] = useState(template);
//   const onChange = useCallback(
//     event => setValue(event.currentTarget.value),
//     []
//   );
//   return { value, onChange };
// };

// export const useFormInput = template => {
//   const formValues = Object.entries(template);
//   let form = {};
//   formValues.forEach(i => (form[i[0]] = i[1]));
//   const [value, setValue] = useState(form);
//   const onChange = useCallback(
//     event =>
//       setValue({
//         ...value,
//         [event.currentTarget.name]: event.currentTarget.value
//       }),
//     []
//   );
//   return { value, onChange };
// };

export const useFormInput = template => {
  const formValues = Object.entries({ ...template });

  let form = {};

  useEffect(() => {
    formValues.forEach(i => (form[i[0]] = i[1]));
  }, [template]);

  const [value, setValue] = useState(form);

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
