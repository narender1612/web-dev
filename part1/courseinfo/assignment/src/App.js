import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = {
    name : 'Half Stack application development',

    parts : [ 
    {
      title : 'Fundamentals of React',
      exercises : 10,
    },
    {
      title : 'Using props to pass data',
      exercises : 7,
    },
    { 
      title : 'State of a component',
      exercises : 14,
    },
  ]
  }  

  return (
    <div>
      <Header data={course}></Header>
      <Content data={course} />
      <Total data={course} /> 
    </div>
  )
}

export default App;