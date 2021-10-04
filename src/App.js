import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Component/Header/Header';
import Nav from './Component/Nav/Nav';

function App() {
  return (
    <div>
      
      <Router>
        <Switch>
          <Route path="/home">
            <Nav></Nav>
            <Header></Header>
          </Route>
          <Route path="/service">
            <Nav></Nav>
          </Route>
          <Route path="/about">
            <Nav></Nav>
          </Route>
          <Route path="/contact">
            <Nav></Nav>
          </Route>
        </Switch>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Router>
    </div>
  );
}

export default App;
