import React from 'react'

const ListKey = () => {
    const persons=[
        {
            id:1,
            name:"kiran"
        },
        {
            id:2,
            name:"ajay"
        }
    ]
    const names=["sujan","sammith","sachin"]
  return (
    <div>
        {
            persons.map(person=>{
               return  <h1 key={person.id}>{person.name}</h1>
            })
        }
        {
            names.map((name,index)=>{
                return <h2 key={index}>{index}{name}</h2>
            })
        }
        {names}
    </div>
  )
}

export default ListKey  