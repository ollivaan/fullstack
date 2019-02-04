import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')


  

  const rows = () => 
  persons.map(person => <li key={Math.random()}>{person.name}</li>)
  
  const handlePersonChange = (event) => {

    setNewName(event.target.value)
  }
  const addPerson = (event) => {
    
    event.preventDefault()
    const personObject = {
      name: newName,

    }
    const result = persons.map(person => person.name)
 
    if (result.indexOf(personObject.name) === -1) {
        setPersons(persons.concat(personObject))
        setNewName('')

        
      } else { 
        
        window.alert(`${newName} on jo luettelossa`)
      } 

  }
  return (
    <div>
      <h2>Puhelinluettelo</h2>

      <ul>
        <form onSubmit={addPerson}>
          nimi: <input value={newName}
          onChange={handlePersonChange}
           />        
          <button type="submit">lisää</button>
        </form>
        </ul>
      <h2>Numerot</h2>
      {rows()}
    </div>
  )

}

export default App