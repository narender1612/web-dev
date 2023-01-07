import { useState } from 'react';
import Button from './Button';
import DisplayAnecdote from './DisplayAnecdote';
import DisplayMostVotedAnecdote from './DisplayMostVotedAnecdote'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 precent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-ray or blood tests when diagnosing patients.',
  ]
  
  const[ selected, setSelected ] = useState(anecdotes[0]);
  const[ votes, setVotes ] = useState([0, 0, 0, 0, 0, 0, 0]);
  
  const handleVotes = () => {
    let newVotes = [...votes];  // let newVotes = votes; doesnt create a new array, just a new reference
    let index = anecdotes.indexOf(selected);
    newVotes[index] += 1;
    setVotes(newVotes);
  }
  
  return(
    <div>
      <DisplayAnecdote value={selected} />
      <p>has {votes[anecdotes.indexOf(selected)]} votes</p>
      <Button name='vote' setFunction={handleVotes} />
      <Button name='next anecdote' setFunction={() => setSelected(anecdotes[Math.floor(Math.random()*7)])} />
      <h1>Anecdote with most votes</h1>
      <DisplayMostVotedAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App;

// always keep in mind that the screen re-renders if your state has changed, if we change one entry in an array
// the object remains the same, but when we change the whole array, the object changes and the page re-renders