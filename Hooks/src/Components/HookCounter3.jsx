import React,{useState} from 'react'

const HookCounter3 = () => {
    const [name, setName] = useState({firstName:"",lastName:""})
  return (
    <>
    <form action="">
        <input type="text" onChange={e=>setName({...name,firstName:e.target.value})} value={name.firstName} />
        <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
    </form>
    <h2>{name.firstName},{name.lastName}</h2>
    
    </>
  )
}

export default HookCounter3