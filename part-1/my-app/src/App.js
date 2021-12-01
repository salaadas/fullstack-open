import React from 'react';

// hello

// Header, Content, Total
// Header: name of course
// Content: parts / number of execises
// Total: total num of exercises

const Header = ({ course = '' }) => <h1>{course}</h1>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);
const Content = ({ parts = [] }) => (
  <>
    {parts.map((p, idx) => (
      <Part part={p} key={idx} />
    ))}
  </>
);

const Total = ({ parts = [] }) => (
  <p>Number of execises {parts.reduce((count, d) => count + d.exercises, 0)}</p>
);

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
