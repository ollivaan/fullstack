import React from 'react'
import ReactDOM from 'react-dom'

const Header = props => {

  return (
  <h1> {props.courses}</h1>
  )
  
} 

 

const Total = props => {
  const pituus = props.parts.length

  let array = [];
  for(let i = 0; i < pituus; i++) {
    array.push(props.parts[i].exercises)
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const total = array.reduce(reducer)

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
const Courses = props => {
    const { courses } = props

    return (
    <div>
    <h1>Opetusohjelma</h1>    
    <Header courses={courses[0].name} />
    <Content parts={courses[0].parts} />
    <Total parts={courses[0].parts} />

    <Header courses={courses[1].name} />
    <Content parts={courses[1].parts} />
    <Total parts={courses[1].parts} />

    </div>
    )
}

const App = () => {
   const courses = [
    {
      name: 'Half Stack -sovelluskehitys',
      id: 1,
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
          exercises: 14,
          id: 3
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 2,
          id: 1
        },
        {
          name: 'Middlewaret',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Courses courses={courses} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)