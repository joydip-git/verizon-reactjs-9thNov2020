import './App.css';
import React, { Component } from 'react'
import Welcome from './Welcome';

/**
 * class Component{
 *  render(){
 *  }
 * }
 */
/**
 * function Component(){
 *   this.state=null;
 * 
 * }
 * Comonent.prototype.render=function(){
 *  
 * }
 * 
 * function App(){
 *   this.render = ()=>{
 *   }
 * }
 * Object.setPrototypeOf(App.prototype, Component.prototype)
 */

class App extends Component {
  constructor() {
    super(); //Component.call(this,...);
    console.log('App created...')
    // this.state = {
    //   message: 'Welcome to React JS',
    //   numberVal: 10,
    //   numbers: [1, 2, 3, 4],
    //   person: { name: 'joydip' }
    // }
  }
  state = {
    message: 'Welcome to React JS',
    numberVal: 10,
    numbers: [1, 2, 3, 4],
    person: { name: 'joydip' }
  }

  //increaseNumberValHandler = (event) => {
  increaseNumberValHandler = (newValue) => {
    // console.log(event.target.value)
    console.log(this.state.numberVal)
    //this.state.numberVal = this.state.numberVal + 1;
    //this.render()

    this.setState({
      numberVal: newValue
    }, () => {
      console.log(this.state.numberVal)
    })
    // setTimeout(() => {
    //   console.log(this.state.numberVal)
    // }, 500);
    // this.setState((currentState) => {
    //   let newState = {
    //     numberVal: currentState.numberVal + 1
    //   }
    //   return newState;
    // }, () => {
    //   console.log(this.state.numberVal)
    // })
  }

  render() {
    console.log('App rendered')
    const { message, numberVal, numbers, person } = this.state;
    return (
      <div className="App">
        <button onClick={this.increaseNumberValHandler}>Increase</button>
        <br />
        <Welcome msg={message} messageValue={message} numberValue={numberVal} numbers={numbers} objValue={person} changeHandler={this.increaseNumberValHandler} />
      </div>
    );
  }
}

export default App;

/**
 * {
 *   msg:'Welcome to React JS',
 *   messageValue: undefined,
     numberValue: undefined,
     numbers: undefined,
     objValue: undefined
 * }
 */
