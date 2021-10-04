import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Class from './components/Class/Class';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SetClass from './components/SetClass/SetClass';
import Trainers from './components/Trainers/Trainers';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/class">
            <Class></Class>
          </Route>
          <Route exact path="/trainers">
            <Trainers></Trainers>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
