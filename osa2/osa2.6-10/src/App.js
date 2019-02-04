import React, { useState } from 'react'

const Persons = ({persons}) => {
    const result = persons.map(person => <li key={Math.random()}>{person.name} {person.number}</li>)
        return (
        <div>{result}</div>
        ) 
}

const PersonForm = props => (
    <form onSubmit={props.addPerson}>
      <div>
        nimi: 
        <input
          value={props.newName}
          onChange={props.handlePersonChange}
        />
      </div>
      <div>
        numero:
        <input
          value={props.newNumber}
          onChange={props.handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  )
const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040123123' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  
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
      <h3>lisää uusi</h3>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />        
      <h3>Numerot</h3>
      <Persons
        persons={persons}
        />
    </div>
  )

}

export default App