import React from 'react';
import {votesFor} from '../reducers/anecdoteReducer'

const AnecdoteList = ({store}) => {
    const anecdotes = store.getState()
    const vote = (id) => {
        console.log('vote', id)
        // Tänne äänestys! 
        // Toteuta mahdollisuus anekdoottien äänestämiseen. 
        // Äänien  määrä tulee tallettaa redux-storeen
        //tää on fine!
        
        store.dispatch(
          votesFor(id)
        )
        // return {
        //   type: 'VOTE',
        //   data: { id }
        // }
      }
      return (
          <div>
            {anecdotes.sort((eka, toka) => toka.votes - eka.votes).map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>
          )}
          </div>
      )
}
export default AnecdoteList