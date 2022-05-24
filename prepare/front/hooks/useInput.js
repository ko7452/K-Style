import { useState, useCallback } from 'react';
//! custom hook
export default (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};
