import React from 'react'
import ReactDOM from 'react-dom'

const Header = props =>
  <h1>{props.course}</h1>

const Total = props => {

   let total = 0
   props.parts.forEach(value => {
    total+= value.exercises;
  })  

return <p>yhteensä {total} tehtävää</p>
}
  
const Part = (props) => {
    return (
      <li>{props.part.name} {props.part.exercises}</li>
    )
  }


const Content = ({parts}) => parts.map(part =>
    <Part 
      key={part.id}
      part={part}
      exercises={part.exercises}
    />
  )
const Course = props => {
    const { course } = props
    return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />

    </div>
    )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10,
        id: 1
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7,
        id: 2
      },
      {
        name: 'Komponenttien tila',
        exercises: 2,
        id: 3
      }      
    ]
  } 

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)