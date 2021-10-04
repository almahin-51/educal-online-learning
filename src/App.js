import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
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
            <Footer></Footer>
          </Route>
          <Route path="/service">
            <Nav></Nav>
            <Footer></Footer>
          </Route>
          <Route path="/about">
            <Nav></Nav>
            <Footer></Footer>
          </Route>
          <Route path="/contact">
            <Nav></Nav>
            <Footer></Footer>
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
