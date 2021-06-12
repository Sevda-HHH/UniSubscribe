import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { HomePage } from './components/Home';
import { Products } from './components/Products';
import { NavBar } from './components/NavBar';
import { Login } from './components/Login';
import { Register } from './components/Resgiter';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact >
            <NavBar />
            <Products></Products>
          </Route>
          <Route path="/products" exact >
            <NavBar />
            <Products></Products>
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
