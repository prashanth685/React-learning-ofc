import React from 'react'
import ComponentC from './Components/ComponentC'

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
    </div>
  )
}

export default App  