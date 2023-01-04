import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'state of a component';
  const exercises3 = 14;

  const commonProps = {
    part1 : {
      title : 'Fundamentals of React',
      exercises : 10,
    },
    part2 : {
      title : 'Using props to pass data',
      exercises : 7,
    },
    part3 : { 
      title : 'State of a component',
      exercises : 14,
    },
  }

  return (
    <div>
      <Header name={course}></Header>
      <Content data={commonProps} />
      <Total sum={exercises1 + exercises2 + exercises3} /> 
    </div>
  )
}

export default App;