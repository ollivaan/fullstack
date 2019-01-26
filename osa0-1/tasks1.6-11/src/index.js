import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
    {text}
    </button>

)
const Statistic = (props) => {
    let all = props.good+props.neutral+props.bad
    if(all===0) {
        return (
            <div>
            painele niitä nappuloita
            </div>
        )
    }

    return (
        <div>
            <table>
                <tbody>

                    <tr>
                        <td>Good: {props.good}</td>
                    </tr>
                    <tr>
                        <td>Neutral: {props.neutral}</td>
                    </tr>
                    <tr>
                        <td>Bad: {props.bad}</td>
                    </tr>
                    <tr>
                        <td><Sum good={props.good} neutral={props.neutral} bad={props.bad} /></td>
                    </tr>
                    <tr>
                        <td><Ka good={props.good} neutral={props.neutral} bad={props.bad} /></td>
                    </tr>
                    <tr>
                        <td><PositivesOnly good={props.good} neutral={props.neutral} bad={props.bad} /></td>
                    </tr>
                </tbody> 
            </table>  


        </div>
    )
}
const Sum = (props) => {
    return (
        <div>
            Sum: {props.good + props.neutral + props.bad}
        </div>
    )
}
const Ka = (props) => {
    return ( 
        <div>

            Ka: {(props.good - props.bad) / (props.good + props.neutral + props.bad)}
          
        </div>
    )
}
const PositivesOnly = (props) => {
    return (
        
        <div>
            Positives: {(props.good)/(props.good + props.neutral + props.bad)*100} %
        </div>
    )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
//   const [selected, setSelected] = useState(0)
  
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
//   const handleAnectodeClick = () => {  
//     setSelected(selected + 1)
//   }     
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
        {/* <History allClicks={allClicks} good={good} neutral={neutral} bad={bad} /> */}
        {/* <Button handleClick={handleAnectodeClick} text='Anectode'/> */}
        {/* {props.anecdotes[selected]}         */}

    </div>
  )
}
// const anecdotes = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
//   ]
// anecdotes={anecdotes}
ReactDOM.render(<App />, 
  document.getElementById('root')
)