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
            <Part osa1={props.parts[0].name} nopat1={props.parts[0].exercises} />
            <Part osa2={props.parts[1].name} nopat2={props.parts[1].exercises} />
            <Part osa3={props.parts[2].name} nopat3={props.parts[2].exercises} />
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
            <p>yhteensä {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} tehtävää</p>
        </div>
    )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys:',
    parts: [
      {
          name: 'Reactin perusteet',
          exercises: 10
      },
      {
         name: 'Tiedonvälitys propseilla',
         exercises: 7          
      },
      {
          name: 'Komponenttien tila',
          exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))