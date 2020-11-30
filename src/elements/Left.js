import React, { Component } from 'react';
import PopUp from './PopUp';


export default class Left extends Component {
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
        let pop = document.getElementsByClassName('pop-up');
        pop[0].classList.add('fade');
        setTimeout(() => {
            this.setState({
                popUp: false
            })
        },500)
    }


    render() {
        const {Database} = this.props;
        const skillsClasses = this.state.popUp ? 'skills dimmed' : 'skills';


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
