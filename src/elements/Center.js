import React, { Component } from 'react';
import Cube from './Cube';
import Footer from './Footer';

export default class Center extends Component {
    render() {
        return (
            <div className='center main'>
                <div className='center-container'>
                    <div className='top'></div>
                    <Cube/>
                    <p className='about'>Some info about myself</p>
                    <Footer/>
                </div>
            </div>
        )
    }
}
