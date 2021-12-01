import React, { useState } from 'react';

const Header = ({ title }) => <h2>{title}</h2>;

const DisplayAnecdoteAndVotes = ({ anecdote, votes }) => (
  <>
    {anecdote}
    <br />
    has {votes} votes
    <br />
  </>
);

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  const [votes, setVotes] = useState([...new Array(anecdotes.length)].fill(0));

  const [selected, setSelected] = useState(0);

  const randomIntBetween = (start, end) =>
    Math.floor(Math.random() * (end - start) + start);

  const handleNext = () => {
    setSelected(randomIntBetween(0, anecdotes.length));
  };

  const handleVote = () =>
    setVotes(votes.map((v, idx) => (idx === selected ? v + 1 : v)));

  return (
    <div>
      <Header title="Anecdote of the day" />
      <DisplayAnecdoteAndVotes
        anecdote={anecdotes[selected]}
        votes={votes[selected]}
      />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      <Header title="Anecdote with most votes" />
      {
        anecdotes[
          votes.reduce(
            (maxIdx, current, currentIdx) =>
              current > votes[maxIdx] ? currentIdx : maxIdx,
            0
          )
        ]
      }
      <br />
      has {Math.max(...votes)} votes
    </div>
  );
};

export default App;
