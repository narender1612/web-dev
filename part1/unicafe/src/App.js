import { useState } from 'react';
import Header from './Header';
import Statistics from './Statistics';
import Button from './Button';

const App = () => {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0); 
  const reviews = [good, neutral, bad];

  return(
    <div>
      <Header name='give feedback' />
      <Button name='good' setFunction={() => setGood(good + 1)} />
      <Button name='neutral' setFunction={() => setNeutral(neutral + 1)} />
      <Button name='bad' setFunction={() => setBad(bad + 1)} />
      <Header name='statistics' />
      <Statistics values={reviews} />
    </div>
    
  )
}

export default App;