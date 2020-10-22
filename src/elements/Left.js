import React, { Component } from 'react';


export default class Left extends Component {

    render() {
        const {Database} = this.props;

        return (
            <div className='left main'>
                <ul className='skills'>
                    {Database.skills.map((project) => (
                        <li
                            key={project.id}
                            className='skill'
                        >{project.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
