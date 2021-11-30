import React from 'react';

// Header, Content, Total
// Header: name of course
// Content: parts / number of execises
// Total: total num of exercises

const Header = ({ course = '' }) => <h1>{course}</h1>;

const Part = ({ data, index }) => (
  <p>
    {' '}
    {data[`part${index + 1}`]} {data[`exercises${index + 1}`]}{' '}
  </p>
);

const Content = ({ data = [] }) => (
  <>
    {data.map((d, idx) => (
      <Part data={d} index={idx} key={idx} />
    ))}
  </>
);

const Total = ({ data = [] }) => (
  <p>
    Number of execises{' '}
    {data.reduce((count, d, idx) => count + d[`exercises${idx + 1}`], 0)}{' '}
  </p>
);

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  const allPartsAndExercises = [
    { part1, exercises1 },
    { part2, exercises2 },
    { part3, exercises3 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content data={allPartsAndExercises} />
      <Total data={allPartsAndExercises} />
    </div>
  );
};

export default App;
