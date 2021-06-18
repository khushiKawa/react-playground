import React, { useState ,useEffect} from "react";
import Card from "./components/card";
import Aux from "./hoc/auxillary";


const CounterTwo=(props)=>{

    const [counter,setCounter]=useState(0);
    const [seed,setSeed]=useState(0);
    
    useEffect(()=>{
        console.log("render");
        console.log("-----------------");
    },[counter,seed])

    useEffect(()=>{
        return ()=>{
            console.log("unmount");
            console.log("-----------------");
            }
    },[props.mount])

    useEffect(()=>{
        //console.log(seed,props.seed)
        console.log("DerivingStateFromProps");
        console.log("-----------------"); 
       setCounter(props.seed);
       setSeed(props.seed);
    },[props.seed])

    const increment=()=>{
    setCounter(counter+1);    
    }

    const decrement=()=>{
    setCounter(counter-1);
    }
    
    
        return <Aux>
           <div className="container">
           <Card caption="Increment" method={increment}/>
           <Card caption="Decrement" method={decrement}/>
           </div>
           <h1 className="counter">{counter}</h1>
           </Aux>
    
}

export default CounterTwo;