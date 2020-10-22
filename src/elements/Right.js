import React, { Component } from 'react'

export default class Right extends Component {
    

    render() {

        const {Database} = this.props;

        return (
            <div className='right main'>
                <ul className='projects'>
                    {Database.projects.map((project) => (
                        <li
                            key={project.id}
                            className='project'
                        >{project.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
