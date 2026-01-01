// import React from "react";

// const Destruct = ({name,age}) =>{
//     return(
//         <>
//         <h1>Hello{name}</h1>
//         <h1>Your age:{age}</h1>
//         </>
//     );
// }
// export default Destruct

import React from 'react'

const Destruct = props => {
    const{name,age}=props;
  return (
    <div>
      <h1>Hello:{name}</h1>
      <h1>Your age:{age}</h1>
    </div>
  )
}

export default Destruct