import React, { Component } from 'react';
import Dark from '../icons/contrast.png';

export default class Header extends Component {

    render() {
        return (
            <div className='header'>
                <button
                    onClick={this.props.toggleInvert}
                    className='dark-button'
                >
                    <img src={Dark} alt='darl' className='dark-icon'></img>
                </button>
            </div>
        )
    }
}