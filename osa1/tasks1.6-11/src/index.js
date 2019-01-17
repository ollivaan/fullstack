import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
    {text}
    </button>

)
const Statistic = (props) => {
    console.log(props)
    return (
        <div>
            <p>Good: {props.good}</p>
            <p>Neutral: {props.neutral}</p>
            <p>Bad: {props.bad}</p>
            <Sum good={props.good} neutral={props.neutral} bad={props.bad} />
            <Ka good={props.good} neutral={props.neutral} bad={props.bad} />
            <PositivesOnly good={props.good} neutral={props.neutral} bad={props.bad} />

        </div>
    )
}
const Sum = (props) => {
    return (
        <div>
            <p>Sum: {props.good + props.neutral + props.bad}</p>
        </div>
    )
}
const Ka = (props) => {
    return ( 
        <div>
            <p>Ka: {(props.good - props.bad) / (props.good + props.neutral + props.bad)} </p>
        </div>
    )
}
const PositivesOnly = (props) => {
    return (
        <div>
            <p> Positives: {(props.good)/(props.good + props.neutral + props.bad)*100} %</p>
        </div>
    )
}
const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
            Painele nappuloita
        </div>
      )
    }
  
    return (
      <div>
        <Statistic good={props.good} neutral={props.neutral} bad={props.bad}/>
      </div>
    )
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  
  const handleGoodClick = () => {
    setAll(allClicks + 1)
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setAll(allClicks + 1)
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setAll(allClicks + 1)  
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
        <History allClicks={allClicks} good={good} neutral={neutral} bad={bad} />
        

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)