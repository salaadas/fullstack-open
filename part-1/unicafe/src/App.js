import React, { useState } from 'react';

const Header = ({ title }) => <h2>{title}</h2>;

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad, all }) => {
  return (
    <>
      {all !== 0 ? (
        <>
          <table>
            <tbody>
              <StatisticLine text="good" value={good} />
              <StatisticLine text="neutral" value={neutral} />
              <StatisticLine text="bad" value={bad} />
              <StatisticLine text="all" value={all} />
              <StatisticLine
                text="average"
                value={all === 0 ? 0 : (good - bad) / all}
              />
              <StatisticLine
                text="positive"
                value={all === 0 ? 0 : Math.round(good * 100) / all + ' %'}
              />
            </tbody>
          </table>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + bad + neutral;

  const handleClick = (fn) => () => fn((f) => f + 1);

  return (
    <div>
      <Header title="give feedback" />
      <Button text="good" handleClick={handleClick(setGood)} />
      <Button text="neutral" handleClick={handleClick(setNeutral)} />
      <Button text="bad" handleClick={handleClick(setBad)} />
      <Header title="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
};

export default App;
