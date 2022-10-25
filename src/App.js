import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';



 


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route exact path="/about"> 
            <About />
          </Route>
          <Route exact path="/contact"> 
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;






































{/* <BrowserRouter>
<Switch>
  <Route exact path="/"> 
    <Home />
  </Route>
  <Route path="/About"> 
    <About /> 
  </Route>
  <Route path="/Contact">
    <Contact /> 
  </Route>
</Switch>
</BrowserRouter> */}