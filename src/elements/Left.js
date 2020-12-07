import React, { Component } from 'react';
import PopUp from './PopUp';


export default class Left extends Component {
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
        const { popUp, project } = this.state;
        const {Database} = this.props;
        const skillsClasses = popUp ? 'skills dimmed' : 'skills';


        return (
            <div className='left main'>
                <ul className={skillsClasses}>
                    {Database.skills.map((project) => (
                        <li
                            key={project.id}
                            className='skill'
                            onClick={() => this.popUp(project)}
                        >{project.title}
                        </li>
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
