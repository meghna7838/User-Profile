// Create Skill component here to display your skills
// In this component there should be a list with each listitem as your skill.

import { Component } from "react";

class Skills extends Component{
    render(){
        return(
            <>
            <ul className="list">
                <li className="list-item">HTML</li>
                <li className="list-item">CSS</li>
                <li className="list-item">JavaScript</li>
                <li className="list-item">React</li>
                <li className="list-item">Node</li>
            </ul>
            </>
        )
    }
}

export default Skills;