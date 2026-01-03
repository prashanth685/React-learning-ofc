import React from 'react'
import { UserConsumer } from './UserContext'

const ComponentF = () => {
  return (
    <div>
        <UserConsumer>
            {
                (username)=>{
                    return <h1>Hello {username}</h1>
                }
            }
        </UserConsumer>
    </div>
  )
}

export default ComponentF