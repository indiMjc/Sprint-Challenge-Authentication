import { useState, useCallback } from 'react';

export const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(
    event => setValue(event.currentTarget.value),
    []
  );
  return { value, onChange };
};
