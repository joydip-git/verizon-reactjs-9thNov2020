import './App.css';
import PersonList from './PersonList';

function App() {
  console.log('[App] rendered/mounting')

  return (
    <div className="App">
      <PersonList data={10} />
    </div>
  );
}

export default App;
