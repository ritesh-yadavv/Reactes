import React from "react";
class Validation extends React.Component {
    constructor(){
        super()
        this.state = {
           name:"",
           password:"",
           nameError:"",
           password:""
        }
    }
    valid(){
        if(this.state.name.includes("@") && this.state.password.length < 5){
            this.setState(
                {nameError:"Invalid Name", passwordError:"Password lenght should be more than 5"}
            )
        }
        else if(this.state.name.includes("@")){
            this.setState(
                {nameError:"Invalid Name"}
            )
        }
        else if(this.state.password.length < 5){
            this.setState(
                {passwordError:"Password lenght should be more than 5"}
            )
        }
        else{
            return true
        }
    }

    submit(){
        this.setState(
            {nameError:"", passwordError:""}
        )
        if(this.valid()){
            alert("form has been submited")
        }
    }

    render(){
        return(
            <div>
                <h1>Form Validation</h1>
                <input 
                    type="text"
                    onChange={(e)=>{this.setState({name:e.target.value})}}
                />
                <p style={{color:"red",fontSize:"14px"}}>{this.state.nameError}</p>
                <br/><br/>
                <input 
                    type="password"
                    onChange={(e)=>{this.setState({password:e.target.value})}}
                />
                <p style={{color:"red",fontSize:"14px"}}>{this.state.passwordError}</p>
                <br/><br/>
                <button onClick={()=> this.submit()}>Submit</button>

            </div>
        );

    }
}

export default Validation;