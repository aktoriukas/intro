import React, { Component } from 'react';
import PopUp from './PopUp';

export default class Right extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             popUp: false
        }
        this.closepopUp = this.closepopUp.bind(this)
    }

    popUp (pop) {
        this.setState({
            popUp:true,
            project: pop
        })
    }
    closepopUp () {
        let pop = document.getElementsByClassName('pop-up');
        pop[0].classList.add('fade');
        setTimeout(() => {
            this.setState({
                popUp: false
            })
        },300)
    }
    

    render() {

        const { Database } = this.props;
        const { project, popUp } = this.state;
        const projectClasses = popUp ? 'projects dimmed' : 'projects';
        
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
                    {popUp ?
                    <PopUp
                        project={project}
                        close={this.closepopUp}
                    />
                    :
                    ''
                    }
                </ul>
            </div>
        )
    }
}
