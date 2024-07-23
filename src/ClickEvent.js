import React from "react";


//Function use 1

// function ClickEvent(){
//     // function testFun(){
//     //     alert("test fun")
//     // }

//     const testFun=()=>{
//         alert("test fun")
//     }
//     return(
//         <div> 
//             <h1>Profile</h1>
//             <button onClick={testFun}>Click Me</button>
//         </div>
//     )
// }


// Class use 2

class ClickEvent extends React.Component{
    testFun(){
        alert("testRitesh")
    }

    render(){
        return(
            <div>
                <h1>Profile</h1>
                <button onClick={this.testFun.bind()}>Click Me</button>
            </div>
        )
    }
}
export default ClickEvent;