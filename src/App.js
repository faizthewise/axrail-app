import React from 'react';
import './App.css';
import AddContact from './Pages/AddContact';
import Landing from './Pages/Landing';
import Header from './Components/header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App" style={{marginTop:20}}>
          <Header title="Phonebook" />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/add" component={AddContact} />
          <Route render={()=> <h2>Sorry. You're lost</h2> }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
