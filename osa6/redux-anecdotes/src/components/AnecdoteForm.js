import React from 'react'
import {createAnecdote} from '../reducers/anecdoteReducer' 

const anecdoteForm = ({store}) => {
    // const anecdotes = store.getState()
    const addAnectode = (event) => {
        event.preventDefault()
        store.dispatch(
          createAnecdote(event.target.anectdootti.value)
        )
        event.target.anectdootti.value = ''
      }
    return (
        <div>
        <h2>create new</h2>
        <form onSubmit={addAnectode}>
          <div><input name="anectdootti" /></div>
          <button>create</button>
        </form>
        </div>
    )
}
export default anecdoteForm