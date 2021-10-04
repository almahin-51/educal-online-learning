import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Nav from './Component/Nav/Nav';
import Service from './Component/Service/Service';

function App() {
  return (
    <div>
      
      <Router>
        <Switch>
          <Route path="/home">
            <Nav></Nav>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/service">
            <Nav></Nav>
            <Service></Service>
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
