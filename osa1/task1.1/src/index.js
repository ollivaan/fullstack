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
    console.log(props)
    return (
        <div>
            <Part osa1={props.name} nopat1={props.exercises} />
            <Part osa2={props.name2} nopat2={props.exercises2} />
            <Part osa3={props.name3} nopat3={props.exercises3} />
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
            <p>yhteensä {props.part1yht + props.part2yht + props.part3yht} tehtävää</p>
        </div>
    )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys:'

  const part1 = {
      name: 'Reactin perusteet',
      exercises: 10
  }

  const part2 = {
      name: 'Tiedonvälitys propseilla',
      exercises: 7
  }
  
  const part3 = {
      name: 'Komponenttien tila',
      exercises: 14
  } 


  return (
    <div>
      <Header course={course} />
      <Content name={part1.name} exercises={part1.exercises} 
      name2={part2.name} exercises2={part2.exercises}
      name3={part3.name} exercises3={part3.exercises} />

      <Total part1yht={part1.exercises} part2yht={part2.exercises} part3yht={part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))