// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon
import { Component } from "react";

class Hero extends Component{
    render(){
        return(
        <>
        <h2>Name: Pranav Sharad Yeole</h2>
        <p>Email: pranav@google.com</p>
        <p>Phone: 8546465544</p>
        <p>Address: ABC,xyz street</p>
        </>);
    }
}

export default Hero;