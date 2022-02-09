import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Containers/Home';
import About from './Containers/About';
import Projects from './Containers/Projects';
import AboutCity from './Containers/AboutCity';
import News from './Containers/News';
import CantactUs from './Containers/CantactUs';
import ADS from './Containers/ADS';
import Footer from './Components/Footer/Footer';
function App() {
  return(
    <>
    <Nav />

    <Switch>
      
    <Route exact path='/' >
      <Home />
    </Route>
      
      <Route exact path='/About' >
        <About />
      </Route>
      
      <Route exact path='/AboutCity' >
        <AboutCity />
      </Route>
      
      <Route exact path='/News' >
        <News />
      </Route>
      
      <Route exact path='/ADS' >
        <ADS />
      </Route>
      
      <Route exact path='/Projects' >
        <Projects />
      </Route>
      
      <Route exact path='/CantactUs' >
        <CantactUs />
      </Route>

    
    </Switch>
    <Footer />
    </>
  )
}
export default App;