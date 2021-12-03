import React, { useState } from 'react';
import useForm from './hooks/useForm';
// import Courses from './components/Courses';
// import courses from './data/courses';

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '39-44-5323523' },
  ]);

  const [show, setShow] = useState(true);

  const [values, handleChange, setValues] = useForm({ name: '', number: '' });

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
    setValues({ name: '', number: '' });
  };

  return (
    <div>
      <h2>PhoneBook</h2>
      <span style={{ textDecoration: show ? 'none' : 'line-through' }}>
        filter shown with
      </span>{' '}
      <input disabled={!show} />
      <h2>add a new</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name:{' '}
          <input name="name" value={values.name} onChange={handleChange} />
          number:{' '}
          <input
            name="number"
            type="tel"
            value={values.number}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <button onClick={toggleList}>{show ? 'Hide' : 'Show'} contacts </button>
        {show &&
          persons.map((p) => (
            <p key={p.name}>
              {p.name} {p.number}
            </p>
          ))}
      </div>
    </div>
  );
};

export default App;
