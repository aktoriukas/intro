import React, { Component } from 'react';
import Cube from './Cube';
import Footer from './Footer';
import Database from '../Database';

export default class Center extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    static getDerivedStateFromProps(props, state) {
        var intro = Database.about.split('/');
        return {
            intro: intro
        }
    }

    render() {
        const {intro} = this.state;

        return (
            <div className='center main'>
                <div className='center-container'>
                    <div className='top'></div>
                    <Cube/>
                        <ul className='about'>
                            {intro.map((point) => (
                                <li key={point} >{point}</li>
                            ))}
                        </ul>
                    <Footer/>
                </div>
            </div>
        )
    }
}
