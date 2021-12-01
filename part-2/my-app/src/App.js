import React, { useState } from 'react';
import notes from './data/notes';
import Notes from './components/Notes';
// import Courses from './components/Courses';
// import courses from './data/courses';

const App = () => {
  const [noteList, setNoteList] = useState(notes);
  const [values, setValues] = useState({ note: '', important: false });

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNoteList((n) => [
      ...n,
      {
        id: noteList.length + 1,
        content: values.note,
        date: new Date().toISOString(),
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
        <button
          type="button"
          onChange={() => setValues((v) => ({ ...v, important: !v.important }))}
        >
          {values.important ? 'Mark as unimportant' : 'Mark as important'}
        </button>{' '}
        <button>Add note</button>
      </form>
      {/* <h1>Web development curriculum</h1>
      <Courses courses={courses} /> */}
    </div>
  );
};

export default App;
