import React from 'react'
import Counterone from './components/Counterone';
// import ComponentC from './Components/ComponentC'

export const UserContext=React.createContext()

export const ChannelContext=React.createContext();

const App = () => {
  return (
    <div>
      <UserContext.Provider value={'prashanth'}>
        <ChannelContext.Provider value={'beast'}>
        <ComponentC/>
        </ChannelContext.Provider>
        </UserContext.Provider>
        <Counterone/>
    </div>
  )
}

export default App  