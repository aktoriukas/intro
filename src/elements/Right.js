import React, { Component } from 'react';
import PopUp from './PopUp';

export default class Right extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             popUp: false
        }
    }

    popUp (pop) {
        this.setState({
            popUp:true,
            project: pop
        })
    }
    closepopUp () {
        this.setState({
            popUp: false
        })
    }
    

    render() {

        const {Database} = this.props;
        const projectClasses = this.state.popUp ? 'projects dimmed' : 'projects';

        return (
            <div className='right main'>
                <ul className={projectClasses}>
                    {Database.projects.map((project) => (
                        <li
                            key={project.id}
                            className='project'
                            onClick={() => this.popUp(project)}
                        >{project.title}</li>
                    ))}
                    {this.state.popUp ?
                    <PopUp
                        project={this.state.project}
                        close={this.closepopUp.bind(this)}
                    />
                    :
                    ''
                    }
                </ul>
            </div>
        )
    }
}
