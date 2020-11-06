import React, { Component } from 'react';


export default class Left extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             levelOpen: false
        }
    }
    

    render() {
        const {Database} = this.props;

        return (
            <div className='left main'>
                <ul className='skills'>
                    {Database.skills.map((project) => (
                        <li
                            key={project.id}
                            className='skill'
                            onMouseEnter={() => this.setState({levelOpen:true})}
                            onMouseLeave={() => this.setState({levelOpen:false})}
                        >{project.title}
                            <div className='level-container'>
                                <span 
                                    className='level' 
                                    style={this.state.levelOpen ===false ? {width: 0}:{width: project.level}}
                                ></span>
                                <span 
                                    className='level-nr'
                                    style={this.state.levelOpen === false ? {opacity: 0}:{opacity: 1}}
                                >
                                {project.level}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
