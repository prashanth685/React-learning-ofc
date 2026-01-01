import React from 'react'

function Childcomponenet(props) {
  return (
    <div>
        <button onClick={props.greethandler()}>greetparent</button>
    </div>
  )
}

export default Childcomponenet  