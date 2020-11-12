//import { Component } from 'react';
import './App.css';
import ClickCounter from './ClickCounter';
import Hero from './Hero';
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
      <ClickCounter data={100} />
      <br />
      <br />
      <HoverCounter value={200} />
      <br />
      <br />
      <Hero heroName='Joker' loggerFn={(errorObj) => console.log(errorObj)} />
    </div>
  )
}
export default App;
