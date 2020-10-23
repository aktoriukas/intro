import React, { Component } from 'react';

export default class Cube extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             popUp: false
        }
    }
    
    render() {
        return (
            <div id="wrapD3Cube">
                <div id="D3Cube">
                    <div id="side1"></div>
                    <div id="side2"></div>
                    <div id="side3"></div>
                    <div id="side4"></div>
                    <div id="side5"></div>
                    <div id="side6"></div>
                </div>
            </div>
        )
    }
}
