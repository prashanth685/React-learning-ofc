import React from 'react'
import SamplePerson from './SamplePerson'

function SampleData() {
    const persons=[
        {
            id:1,
            name:"ajay",
            age:20
        },
        {
            id:2,
            name:"sujan",
            age:23
        }
    ]
  return (
    <div>
        {
            // persons.map(person=><h3>{person.age}</h3>)
            persons.map(person=><SamplePerson person={person}/>)
        }

    </div>
  )
}

export default SampleData