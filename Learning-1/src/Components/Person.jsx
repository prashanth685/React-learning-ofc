import React from 'react'

function Person({name}) {
  return (
    <div>
        id {name.id},{name.name},{name.age}
    </div>
  )
}

export default Person