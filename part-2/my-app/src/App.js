import React, { useState } from 'react';
import notes from './data/notes';
import Notes from './components/Notes';
import useForm from './hooks/useForm';
// import Courses from './components/Courses';
// import courses from './data/courses';

const App = () => {
  const [noteList, setNoteList] = useState(notes);
  const [values, handleChange, setValues] = useForm({
    note: '',
    important: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setNoteList((n) => [
      ...n,
      {
        id: noteList.length + 1,
        content: values.note,
        date: new Date().toISOString(),
        important: values.important,
      },
    ]);
    setValues({ note: '', important: false });
  };

  return (
    <div>
      <Notes notes={noteList} />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="note"
          name="note"
          onChange={handleChange}
          value={values.note}
        />
        <input
          onChange={handleChange}
          type="checkbox"
          checked={values.important}
          name="important"
          id="important"
        />
        <button>Add note</button>
      </form>
      {/* <h1>Web development curriculum</h1>
      <Courses courses={courses} /> */}
    </div>
  );
};

export default App;
