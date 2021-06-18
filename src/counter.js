import React from "react";
import Card from "./components/card";
import Aux from "./hoc/auxillary";


class Counter extends React.Component{

    constructor(props){
        console.log("constructor");
        super(props)
        this.state={
            counter:0,
            seed:0
        }
    }


    increment=()=>{
    this.setState({counter:this.state.counter+1})
    }

    decrement=()=>{
    this.setState({counter:this.state.counter-1})
    }
    
    static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps");
    console.log("-----------------");        
     if(props.seed && props.seed!==state.seed){
         return{
             counter:props.seed,
             seed:props.seed
         }
     }
     return null;
    }

    componentDidMount(){
        console.log("componentDidMount");
        console.log("-----------------");
    }

    shouldComponentUpdate(nextProps,NextState){
        //console.log(this.props.ignoreProp,nextProps.ignoreProp );
        if((this.props.ignoreProp || this.props.ignoreProp===0) && this.props.ignoreProp!==nextProps.ignoreProp){
        console.log("shouldComponentUpdate-No");
        console.log("-----------------");
        return false;
        }
        console.log("shouldComponentUpdate-Yes");
        console.log("-----------------");
        return true;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
        console.log("-----------------");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
        console.log("-----------------");
    }

    

    render(){
        console.log(this.state);
        console.log("render");
        return <Aux>
           <div className="container">    
           <Card caption="Increment" method={this.increment}/>
           <Card caption="Decrement" method={this.decrement}/>
           </div>
           <h1 className="counter">{this.state.counter}</h1>
           
           </Aux>
    }
}

export default Counter;