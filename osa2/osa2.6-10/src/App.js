import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040123123' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')


  

  const rows = () => 
  persons.map(person => <li key={Math.random()}>{person.name} {person.number}</li>)
  
  const handlePersonChange = (event) => {

    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {

    setNewNumber(event.target.value)
  }
  const addPerson = (event) => {
    
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber

    }
    const result = persons.map(person => person.name)
 
    if (result.indexOf(personObject.name) === -1) {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')

        
      } else { 
        
        window.alert(`${newName} on jo luettelossa`)
      } 

  }
  return (
    <div>
      <h2>Puhelinluettelo</h2>

   
        <form onSubmit={addPerson}>
          nimi: <input value={newName}
          onChange={handlePersonChange}
           />
          <div>numero: <input value={newNumber}
          onChange={handleNumberChange} />
          </div>           
          <button type="submit">lisää</button>
        </form>
        
      <h2>Numerot</h2>
      {rows()}
    </div>
  )

}

export default App