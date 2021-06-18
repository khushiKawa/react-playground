import React, { useState } from "react";
import Card from "./components/card";
import CounterTwo from "./counterTwo";

const Hooks=()=>{
   
    const [mount,setMount]=useState(true);
    const [ignoreProp,setIgnoreProp]=useState(0);
    const [seed,setSeed]=useState(60); 

    const mountHandler=()=>{
      setMount(true); 
    }
    const unMountHandler=()=>{
      setMount(false);
    }

    const ignorePropHandler=()=>{
      setIgnoreProp(Math.random());
    }

    const seedGeneratorHandler=()=>{
        setSeed(Number.parseInt(Math.random()*100));
    }
  
    
        
        return <div className="main">
            <h2>Using React Hooks</h2>
            <h4>Check Console</h4>
           <div className="container">
           <Card caption="Mount" method={mountHandler}/>
           <Card caption="UnMount" method={unMountHandler}/>
           <Card caption="IgnoreProp" method={ignorePropHandler}/>
           <Card caption="SeedGenerator" method={seedGeneratorHandler}/>
           </div>
           {mount && <CounterTwo ignoreProp={ignoreProp} seed={seed} mount={mount}></CounterTwo>}
        </div>
    
}

export default Hooks;