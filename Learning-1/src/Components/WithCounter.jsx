import React from 'react'

const UpdatedCounter = (OriginalComponent) => {
    class NewComponent extends React.Component{
        render(){
            return <OriginalComponent name=""/>
        }
    }
  return  NewComponent
}

export default UpdatedCounter