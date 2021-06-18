import React from "react";
import Counter from "./counter";
import Card from "./components/card";

class Methods extends React.Component{

    constructor(props){
        console.log("constructor");
        super(props)
        this.state={
            mount:true,
            ignoreProp:0,
            seed:60
        }
    }

    mount=()=>{
      this.setState({mount:true});
    }
    unMount=()=>{
      this.setState({mount:false});
    }

    ignoreProp=()=>{
       let finalVal={
           ...this.state,
           ignoreProp:Math.random()
       } 
       this.setState(finalVal);
       
    }

    seedGenerator=()=>{
        this.setState({seed:Number.parseInt(Math.random()*100)});
        //console.log(this.state);
    }
  
    render(){
        console.log("render");
        return <div className="main">
            <h2>Using Lifecycle Methods</h2>
            <h4>Check Console</h4>
           <div className="container">
           <Card caption="Mount" method={this.mount}/>
           <Card caption="UnMount" method={this.unMount}/>
           <Card caption="IgnoreProp" method={this.ignoreProp}/>
           <Card caption="SeedGenerator" method={this.seedGenerator}/>
           </div>
           {this.state.mount && <Counter ignoreProp={this.state.ignoreProp} seed={this.state.seed}></Counter>}
        </div>
    }
}

export default Methods;