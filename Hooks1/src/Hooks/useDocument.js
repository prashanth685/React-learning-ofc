import {useEffect} from 'react'

const useDocument = (count) => {
    useEffect(()=>{
        document.title=`count: ${count}`
    },[count])
}

export default useDocument  