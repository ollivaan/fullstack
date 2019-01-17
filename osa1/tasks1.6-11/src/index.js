import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
    {text}
    </button>

)
const Statistic = (props) => {
    return (
        <div>
            <p>Good: {props.good}</p>
            <p>Neutral: {props.neutral}</p>
            <p>Bad: {props.bad}</p>
        </div>
    )
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }  
  return (
    <div>
        <h1>Give feedback</h1>
        {/* {good} */}
        <Button handleClick={handleGoodClick} text='Good'/>
        {/* {neutral} */}
        <Button handleClick={handleNeutralClick} text='Neutral'/>
        {/* {bad} */}
        <Button handleClick={handleBadClick} text='Bad'/>
        <h2>Statistiikka</h2>
        <Statistic good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)