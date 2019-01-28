import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}> {props.text}</button>
)
const App = (props) => {
 

  const [selected, setSelected] = useState(0)
  const [vote, setVoted] = useState(new Array(anecdotes.length).fill(0))
  const [topVoted, setTopVoted] = useState(0)

  const randomanectode = Math.floor(anecdotes.length*Math.random())
  const random = () => setSelected(randomanectode)

  const voteanectode = (props) => {
    const copy = [...vote]
    copy[props] += 1    
    setVoted(copy)
    setTopVotedAnacdote()
  }
//   var a = [0, 21, 22, 7];
// var indexOfMaxValue = a.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

// document.write("indexOfMaxValue = " + indexOfMaxValue); // prints "indexOfMaxValue = 2"
  const setTopVotedAnacdote = () => {
    setTopVoted(vote.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0))

}

  return (
    <div>
      <h1>Anectode of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <Button handleClick={() => voteanectode(selected)} text="vote"></Button>
      <button onClick={random}> next anectode </button> 
      <h1>Anecdote with most votes</h1>
        <p>{props.anecdotes[topVoted]}</p>
        <p>has {vote[topVoted]} votes </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)