import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <p>{props.course}</p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part osa1={props.part1} nopat1={props.exercises1} />
            <Part osa1={props.part2} nopat1={props.exercises2} />
            <Part osa3={props.part3} nopat3={props.exercises3} />
        </div>
    )
}
const Part = (props) => {
    return (
        <div>
            <p>{props.osa1} {props.nopat1}</p>
            <p>{props.osa2} {props.nopat2}</p>
            <p>{props.osa3} {props.nopat3}</p>
        </div>
    )    
}

const Total = (props) => {
    return (
        <div>
            <p>yhteensä {props.exercises1 + props.exercises2 + props.exercises3} tehtävää</p>
        </div>
    )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys:'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} 
      exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))