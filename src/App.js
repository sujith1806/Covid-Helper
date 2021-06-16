import './App.css';
import MainPage from './components/MainPage';
import Districts from './components/districts';
import Vaccinecenterdetails from './components/vacperdistrict';
import { Route,Switch,BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/districts/:state_id" component={Districts} />
        <Route exact path="/vaccinedetails/:dist_id" component={Vaccinecenterdetails} />
      </Switch>
    </div>
    </Router>

  );
}

export default App;
