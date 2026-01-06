import React from 'react'
import { UserContext, ChannelContext } from '../App'

const ComponentE = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => (
          <ChannelContext.Consumer>
            {(channel) => (
              <div>
                channel name: {channel}, user name: {user}
              </div>
            )}
          </ChannelContext.Consumer>
        )}
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentE
