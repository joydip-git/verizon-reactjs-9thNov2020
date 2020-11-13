import { useState } from 'react';
import './App.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

function App() {

  const [countState, setCountState] = useState({ count: 0, val: 10 });
  const [dataState, setDataState] = useState(0);
  const [showState, setShowState] = useState(false);

  const increaseCount = () => {
    // setCountState({
    //   count: 10
    // })
    //this.setState((ps,props)=>{return {count:ps.count+props.x}})
    setCountState((ps) => {
      return {
        ...ps,
        count: ps.count + 1
      }
    })
    //setDataState(10);
    setDataState(ps => { return ps + 1 })
    setShowState(ps => !ps);
  }

  return (
    <div className="App">
      {/* count:&nbsp;{countState.count}
      <br />
      Val:&nbsp;{countState.val}
      <br />
      Data:&nbsp;{dataState}
      <br />
      <button onClick={increaseCount}>Increase</button> */}
      <ClickCounter />
      <br />
      <br />
      <HoverCounter />
    </div>
  );
}

export default App;


// const test = (state) => {
//   let x = state;
//   const fn = () => { }
//   return [x, fn];
// }