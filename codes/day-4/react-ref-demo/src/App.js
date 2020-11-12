import { element } from 'prop-types';
import { createRef } from 'react';
import './App.css';
import InputChild from './InputChild';
import InputChildFunc from './InputChildFunc';

function App() {
  let inputCallbackRef = null;
  let inputCreateRef = createRef();
  let inputChildCreateRef = createRef()
  let inputChildFnCreateRef = createRef()
  //callback ref
  const getInputRef = (inputElement) => {
    inputCallbackRef = inputElement;
  }

  const validateInputHandler = () => {
    // if (inputCallbackRef !== null)
    //   inputCallbackRef.focus();

    // console.log(inputCreateRef.current);
    // console.log(inputChildCreateRef.current)
    // inputChildCreateRef.current.focusInput();
    inputChildFnCreateRef.current.focus()
    //console.log(inputChildFnCreateRef.current)
  }
  return (
    <div className="App">
      <input type='text' name='callbackref' ref={getInputRef} />
      <br />
      <button onClick={validateInputHandler}>Validate/Focus 1st Input</button>
      <br />
      <input type='text' name='createref' ref={inputCreateRef} />
      <br />
      <button onClick={validateInputHandler}>Validate/Focus 2nd Input</button>
      <br />
      Input Child:&nbsp;<InputChild ref={inputChildCreateRef} />
      <br />
      <button onClick={validateInputHandler}>Validate/Focus Child Input</button>
      <br />
      Input Child Functional:&nbsp;<InputChildFunc ref={inputChildFnCreateRef} x={10} />
      <br />
      <button onClick={validateInputHandler}>Validate/Focus Functional Child Input</button>
    </div>
  );
}

export default App;
