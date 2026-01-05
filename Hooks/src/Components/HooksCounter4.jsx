import React, { useState } from 'react'

const HooksCounter4 = () => {
    const [items, setItems] = useState([])

    const addnumber=()=>{
    //     setItems(item)=>[...item,{
    //         id:item.length,
    //         value:item.value
    // ]}}
    // }
        setItems(prevItems => [
      ...prevItems,
      {
        id: prevItems.length,
        value: Math.floor(Math.random() * 10) + 2
      }
    ]);
  };
  return (
    <>
    <button onClick={addnumber}>add number</button>
    <ul>
        {
            items.map(item=>{
                <li key={item.id}>{item.value}</li>
            })
        }
    </ul>
    </>
  )
}

export default HooksCounter4