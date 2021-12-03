import { useState } from 'react';

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    e.target.type === 'checkbox'
      ? setValues((v) => ({ ...v, [e.target.name]: !v[e.target.name] }))
      : setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  return [values, handleChange, setValues];
};

export default useForm;
