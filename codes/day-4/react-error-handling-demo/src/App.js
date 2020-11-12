import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Hero from './Hero';

function App() {
  const logErrorHandler = (errorInfo) => {

  }
  return (
    <div className="App">
      {/* <ErrorBoundary> */}
      <Hero heroName='Batman' />
      <br />
      <ErrorBoundary logger={logErrorHandler}>
        <Hero heroName='Joker' />
      </ErrorBoundary>
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
/**
 * {
 * props:{ *
 *   children:[]
 * }
 * }
 */
