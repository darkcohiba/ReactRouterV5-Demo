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
          <Route path="/About"> 
            <About /> 
          </Route>
          <Route path="/Contact">
            <Contact /> 
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;



{/* <Switch>
  <Route exact path="/">
    {showCurrentBook ?
      <BookDisplay book={currentBook} /> :
      <Home onHandleDisplay={HandleDisplay} userAuthorized={userAuthorized} />}
  </Route>
  <Route exact path="/admin">
    <Admin books={displayedBooks} setBooks={setBooks} adminAuthorized={adminAuthorized} />
  </Route>
  <Route exact path="/books">
    {showCurrentBook ?
      <BookDisplay book={currentBook} /> :
      <Books userAuthorized={userAuthorized} onHandleDisplay={HandleDisplay} />}
  </Route>

  <Route exact path="/login">
    <Login userAuthorized={userAuthorized} setUserAuthorized={setUserAuthorized} setAdminAuthorized={setAdminAuthorized} />
  </Route>
  <Route exact path="/signup">
    <Signup />
  </Route>
</Switch> */}