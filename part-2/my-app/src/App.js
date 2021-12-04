import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useForm from './hooks/useForm';
import Countries from './components/Countries';

const App = (props) => {
  const [countries, setCountries] = useState([]);
  const [values, handleChange] = useForm({ query: '' });

  const filteredList = countries.filter((c) =>
    c.name.common.toLowerCase().includes(values.query.toLowerCase())
  );

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <div>
      <div className="query-field">
        find countries{' '}
        <input name="query" value={values.query} onChange={handleChange} />
      </div>
      <div className="countries">
        <Countries query={values.query} countries={filteredList} />
      </div>
    </div>
  );
};

export default App;
