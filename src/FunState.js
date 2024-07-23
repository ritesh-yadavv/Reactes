import React from "react";
import { useState } from "react";

function FunState(){
    const [count,setCount]=useState(100)
    return(<div>
        <h1> Hooks in Function Component {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>)
}

export default FunState;