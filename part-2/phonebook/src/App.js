import React, { useState } from 'react';
import useForm from './hooks/useForm';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Contacts from './components/Contacts';

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '39-44-5323523', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);

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
