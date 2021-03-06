import React, { Component } from 'react'

export default class PopUp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    static getDerivedStateFromProps(props, state) {
        var tasks = props.project.info.split('/');
        return {
            tasks: tasks
        }
    }
    render() {
        let link;
        if (this.props.project.url) {
            link = 
                <a 
                    className='website' 
                    href={this.props.project.url} 
                    target='_black'>
                    {`www.website`}
                </a>
        } else if (this.props.project.url === false) {
            link =
                <div
                    className='website'
                     >project still in development
                </div>
        }else {
            link = ''
        }
        return (
            <div className='pop-up'
            >
                <span 
                    className='button-x'
                    onClick={this.props.close}
                >
                    <span></span>
                    <span></span>
                </span>
                <h3 className='title'>{this.props.project.title}</h3>
                <ul className='task-list'>
                    {this.state.tasks.map((task) => (
                        <li 
                            className='task' 
                            key={task}>
                            {task}
                        </li>
                    ))}
                </ul>
                {link}
            </div>
        )
    }
}
