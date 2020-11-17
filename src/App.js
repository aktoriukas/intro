import React, { Component } from 'react'
import './App.css';
import Left from './elements/Left';
import Center from './elements/Center';
import Right from './elements/Right';
import Database from './Database';


export default class App extends Component {  

  constructor(props) {
    super(props)
  
    this.state = {
       dark: false
    }
  }
  
  toggleInvert() {
    this.setState({
      dark: !this.state.dark
    })
  }

  render () {
    return (
      <div className={this.state.dark === false ? 'App' : 'App invert'}>
        <Left Database={Database}/>
        <Center
          Database={Database}
          toggleInvert={this.toggleInvert.bind(this)}
         />
        <Right 
          Database={Database}
        />
      </div>
    );  
  }
}
