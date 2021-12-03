import React, { useEffect, useState } from 'react';
import useForm from './hooks/useForm';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Contacts from './components/Contacts';
import axios from 'axios';

const App = (props) => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((res) => setPersons(res.data));
  }, []);

  const [show, setShow] = useState(true);

  const [values, handleChange, setValues] = useForm({
    name: '',
    number: '',
    filtered: '',
  });

  const toggleList = () => setShow(!show);

  const handleAddPerson = (e) => {
    e.preventDefault();
    if (!persons.find((p) => p.name === values.name)) {
      setPersons(
        persons.concat([{ name: values.name, number: values.number }])
      );
    } else {
      alert(`${values.name} is already added to phonebook`);
    }
    setValues({ name: '', number: '', filtered: '' });
  };

  return (
    <div>
      <h2>PhoneBook</h2>
      <Filter
        filteredValues={values.filtered}
        handleChange={handleChange}
        show={show}
      />
      <h2>add a new</h2>
      <PersonForm
        handleChange={handleChange}
        handleSubmit={handleAddPerson}
        values={values}
      />
      <h2>Numbers</h2>
      <Contacts
        persons={persons}
        show={show}
        toggle={toggleList}
        values={values}
      />
    </div>
  );
};

export default App;
