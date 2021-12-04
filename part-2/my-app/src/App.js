import React, { useEffect, useState } from 'react';
import useForm from './hooks/useForm';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Contacts from './components/Contacts';
import { createOne, getAll, updateOne } from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getAll().then((initialData) => setPersons(initialData));
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

    const newPerson = {
      name: values.name,
      number: values.number,
    };

    if (!persons.find((p) => p.name === values.name)) {
      createOne(newPerson).then((res) => {
        setPersons(persons.concat(res));
      });
    } else {
      const willUpdate = window.confirm(
        `${values.name} is already added to phonebook, replace the old number with a new one?`
      );

      if (willUpdate) {
        const updatePerson = persons.find((p) => p.name === values.name);
        updateOne(updatePerson.id, {
          ...updatePerson,
          number: values.number,
        }).then((res) =>
          setPersons(
            persons.map((p) => (p.name === updatePerson.name ? res : p))
          )
        );
      }
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
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;
