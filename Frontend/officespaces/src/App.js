import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './Components/SignIn'
import { BrowserRouter ,Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import Attendance from './Components/Attendance'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path="/" exact component={SignIn} />
    <Route exact path='/dashboard' exact component={Dashboard}/>
    <Route exact path='/attendance' exact component={Attendance}/>
          
    </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
