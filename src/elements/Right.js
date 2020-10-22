import React, { Component } from 'react'

export default class Right extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             popUp: false
        }
    }

    popUp (pop) {
        this.setState({
            popUp:true
        })
    }
    

    render() {

        const {Database} = this.props;

        return (
            <div className='right main'>
                <ul className='projects'>
                    {Database.projects.map((project) => (
                        <li
                            key={project.id}
                            className='project'
                            onClick={() => this.popUp(project)}
                        >{project.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
