import { useState } from 'react';
import Content from './components/Content';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '040-1234567' }
  ])

  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');


  // function for when user is typing a new name
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleAddName = (event) => {
    event.preventDefault();

    //checking for same name using filter function
    const result = persons.filter((person) => person.name === newName);
    
    if(result.length > 0){
      alert(`${newName} is already added to the phoebook`);
    } else {
      addName();
    }
    setNewName('');
    setNewNumber('');
  }
  // function to add newName to the phonebook
  const addName = () =>{
    const newObject = {
      name: newName,
      phone: newNumber
    }
    setPersons(persons.concat(newObject));
  }

  return(
    <div>
      <h1>PhoneBook</h1>
      <form>
        <div>
          filter shown with
        </div>
      </form>
      <h1>Add New</h1>
      <form onSubmit={handleAddName}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Content names={persons} />
    </div>
  )
}

export default App;