import React from 'react'
import  Greet  from './Components/Greet'
import Hello from './Components/Hello'
import Props from './Components/Props'
import ClassComp from './Components/ClassComp'
import Message from './Components/Message'
import Counter from './Components/Counter'
import Destruct from './Components/Destruct'
import FunctionClick from './Components/FunctionClick'
import ParentComponent from './Components/ParentComponent'

const App = () => {
  return (
    <>
    <Greet/>
    <Hello/>
    <ClassComp name="sachin" age="26"/>
    <Props name="ajay"/>
    <Message/>
    <Counter/>
    <Destruct name="kiran" age="30"/>
    <FunctionClick/>
    <ParentComponent/>

    
    </>
  )
}

export default App