import Login from './components/Login';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from"react-router-dom"
import Header from './components/Header';
import Home from './components/Home';





function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Router path ="/home">
            <Header/>
            <Home/>
          </Router>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
