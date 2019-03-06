import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
// import { 
//   createAnecdote, votesFor
// } from './reducers/anecdoteReducer' 

// const App = (props) => {
  // const anecdotes = props.store.getState()
  
  // const addAnectode = (event) => {
  //   event.preventDefault()
  //   props.store.dispatch(
  //     createAnecdote(event.target.anectdootti.value)
  //   )
  //   event.target.anectdootti.value = ''
  // }
  
  // const vote = (id) => {
  //   console.log('vote', id)
  //   // Tänne äänestys! 
  //   // Toteuta mahdollisuus anekdoottien äänestämiseen. 
  //   // Äänien  määrä tulee tallettaa redux-storeen
  //   //tää on fine!
    
  //   props.store.dispatch(
  //     votesFor(id)
  //   )
  //   // return {
  //   //   type: 'VOTE',
  //   //   data: { id }
  //   // }
  // }

  
  const App = (props) => {
    return (
      <div>
        <h2>Anecdotes</h2>
        <AnecdoteForm store={props.store} />
        <AnecdoteList store={props.store} />
      </div>
    )
  }
  
  export default App
