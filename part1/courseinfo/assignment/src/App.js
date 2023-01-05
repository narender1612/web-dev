import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = 'Half Stack application development';

  const parts = [ 
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

  return (
    <div>
      <Header name={course}></Header>
      <Content data={parts} />
      <Total sum={parts} /> 
    </div>
  )
}

export default App;