import React from 'react'
import ParentComponent from './components/ParentComponent'
import Counter from './components/Counter'
import Focusinput from './components/Focusinput'
import HookTimer from './components/HookTimer'

const App = () => {
  return (
    <div>
      <ParentComponent/>
      <Counter/>
      <Focusinput/>
      <HookTimer/>
    </div>
  )
}

export default App