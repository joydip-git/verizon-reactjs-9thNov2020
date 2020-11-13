import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import DashBoard from '../../components/Common/DashBoard/DashBoard';
import RouteGenerator from '../../routes/RouteGenerator';

function App() {
  return (
    <Router>
      <div className="App">
        <DashBoard />
        {/* <Route render={() => <span>Hello...</span>} path='/' /> */}
        <RouteGenerator />
      </div>
    </Router>
  );
}

export default App;
