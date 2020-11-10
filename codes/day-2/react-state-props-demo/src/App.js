import './App.css';
import React from 'react'
import Welcome from './Welcome';

function App() {
  const message = 'Welcome to React JS';
  return (
    <div className="App">
      <Welcome msg={message} messageValue={message} numberValue={10} numbers={[1, 2, 3, 4]} objValue={{ name: 'joydip' }} />
    </div>
  );
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
