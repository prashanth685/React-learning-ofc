import React from 'react'

function NameList() {
    const names=[
        {
            id:1,
            name:"bruce",
            age:20
        },
        {
            id:1,
            name:"bruce",
            age:20
        },
        {
            id:1,
            name:"bruce",
            age:20
        },
        {
            id:1,
            name:"bruce",
            age:20
        }
    ]
  return (
    <div>
        <h2>
            {
                names.map(name=>
                    <h2>{name.id}{name.name}{name.age}</h2>)
                                    //    <Person name={name}/>
            }
        </h2>
        
    </div>
  )
}

export default NameList 