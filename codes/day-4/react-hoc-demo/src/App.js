//import { Component } from 'react';
import './App.css';
import ClickCounter from './ClickCounter';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
/*
const common = {
  sayHi: () => console.log('Hi')
}
class App extends Component {
  render() {
    return (
      <div className="App">
        {
          this.sayHi()
        }
      </div>
    );
  }
}
Object.assign(App.prototype, common);
*/
const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      <ClickCounter />
      <br />
      <br />
      <HoverCounter />
    </div>
  )
}
export default App;
