import React from 'react'
import ParentComponent from './components/ParentComponent'
import Counter from './components/Counter'
import Focusinput from './components/Focusinput'
import HookTimer from './components/HookTimer'
 import Doctitle from "./components/Doctitle"
const App = () => {
  return (
    <div>
      <ParentComponent/>
      <Counter/>
      <Focusinput/>
      <HookTimer/>
      <Doctitle/>
    </div>
  )
}

export default App