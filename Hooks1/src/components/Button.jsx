import React from 'react'

const Button = ({handleClick,childern}) => {
    console.log("rendering button-",childern)
  return (
    <div>
        <button onClick={handleClick}>  
            {childern}

        </button>
    </div>
  )
}

export default React.memo(Button)