import React, { useState } from "react";        
function useState(){   
    const[count,setCount]=useState(0)
        const increment =()=>setCount(prevCount=>prevCount+1)
        const Decrement = ()=>{
            if(count>0)
                setCount(prevCount=>prevCount-1)
        }
        return(
            <>
            <button onClick={increment}>Inc</button>
            <button onClick={Decrement}>Dec</button>
            </>
        )
}
export default useState
