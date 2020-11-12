import './App.css';
import ClickCounter from './ClickCounter';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

function App() {
  /*
  const showClickCounter = (countData, countHandlerFnRef) => {
    return <ClickCounter countValue={countData} countHandlerFn={countHandlerFnRef} data={1000} />;
  }
  const showHoverkCounter = (countData, countHandlerFnRef) => {
    return <HoverCounter count={countData} countHandler={countHandlerFnRef} value={2000} />;
  }
  */
  return (
    // <div className="App">
    //   <Counter invoke={showClickCounter} />
    //   <br />
    //   <br />
    //   <Counter invoke={showHoverkCounter} />
    // </div>
    <div>
      <Counter render={(countData, countHandlerFnRef) => {
        return <ClickCounter countValue={countData} countHandlerFn={countHandlerFnRef} data={1000} />
      }} />
      <br />
      <br />
      <Counter render={(countData, countHandlerFnRef) => {
        return <HoverCounter count={countData} countHandler={countHandlerFnRef} value={2000} />
      }} />
    </div>
  );
}

export default App;
