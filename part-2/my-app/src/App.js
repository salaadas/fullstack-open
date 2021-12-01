import React from 'react';
import Courses from './components/Courses';
import courses from './data/courses';

const App = () => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Courses courses={courses} />
    </div>
  );
};

export default App;
