import React from 'react'

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
      console.log(props)  
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

export default Courses