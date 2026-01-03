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
import UserGreeting from './Components/UserGreeting'
import NameList from './Components/NameList'
import SampleData from './Components/SampleData'
import ListKey from './Components/ListKey'
import Styleings from './Components/Styleings'
import Form from './Components/Form'
import LifeCycleA from './Components/LifeCycleA'
import LifeCycleC from './Components/LifeCycleC'
import PureComponet from './Components/PureComponet'
import Memo from './Components/Memo'
import RefsDemo from './Components/RefsDemo'
import PortalDemo from './Components/PortalDemo'
import Hero from './Components/Hero'
import ErrorBounndary from './Components/ErrorBounndary'

const App = () => {
  return (
    <>
    {/* <Greet/>
    <Hello/>
    <ClassComp name="sachin" age="26"/>
    <Props name="ajay"/>
    <Message/>
    <Counter/>
    <Destruct name="kiran" age="30"/>
    <FunctionClick/>
    <ParentComponent/>
    <UserGreeting/>
    <NameList/>
    <SampleData/>
    <ListKey/> */}
    {/* <Styleings primary={true}/> */}
    {/* <Form/> */}
    {/* <LifeCycleA/> */}
    {/* <LifeCycleC/> */}
    {/* <PureComponet/> */}
    {/* <Memo/> */}
    {/* <RefsDemo/> */}
    <PortalDemo/>
    <ErrorBounndary>
    <Hero heroName="batman"/>
</ErrorBounndary>
<ErrorBounndary>
      <Hero heroName="superman"/>
</ErrorBounndary>
<ErrorBounndary>
      <Hero heroName="joker"/>

</ErrorBounndary>
    
    </>
  )
}

export default App