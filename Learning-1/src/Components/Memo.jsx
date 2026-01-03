import React from "react";

const Memo =()=>{
    setInterval(() => {
        console.log("first")
    }, 1000);
    return(
        <>
        </>
    );
}
export default React.memo(Memo)