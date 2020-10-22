import React, { Component } from 'react';
import Cube from './Cube';
import Footer from './Footer';

export default class Center extends Component {
    render() {
        const {Database} = this.props;

        return (
            <div className='center main'>
                <div className='center-container'>
                    <div className='top'></div>
                    <Cube/>
                        <p className='about'>{Database.about}</p>
                    <Footer/>
                </div>
            </div>
        )
    }
}
