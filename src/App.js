import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Nav from './Component/Nav/Nav';
import Service from './Component/Service/Service';
import './App.css';
import Contact from './Component/Contact/Contact';
import colorLogo from './image/logo.png';
import logo from './image/logo-2.png';

function App() {
  return (
    <div>
      
      <Router>
        <Switch>
          <Route path="/home">
            <Nav color="text-black" cl={colorLogo}></Nav>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/service">
            <Nav color="text-black" cl={colorLogo}></Nav>
            <Service></Service>
            <Footer></Footer>
          </Route>
          <Route path="/about">
            <Nav color="text-black" cl={colorLogo}></Nav>
            <Footer></Footer>
          </Route>
          <Route path="/contact">
            <Nav color="text-light" cl={logo}></Nav>
            <Contact></Contact>
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
