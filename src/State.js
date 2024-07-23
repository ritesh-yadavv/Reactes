import React from "react";

class State extends React.Component {
    constructor(){
        super();
        this.state = {
            name:'peter',
            email:'peter@state.com'
        }
    }
    updateState(){
        this.setState({
            name:'Ram'
        })
    }
    render(){
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <h1>Email: {this.state.email}</h1>
                
                <button onClick={()=>{this.updateState()}}>Update</button>
            </div>
        )
    }
}

export default State;