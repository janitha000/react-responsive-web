import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/pages/HomePage/Home'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Router>

  );
}

export default App;
