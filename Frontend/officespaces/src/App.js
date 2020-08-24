import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './Components/SignIn'
import { BrowserRouter ,Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import Attendance from './Components/Attendance'
import Announcements from './Components/Announcements'
import Form from './Components/Form'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path="/" exact component={SignIn} />
    <Route exact path='/dashboard' exact component={Dashboard}/>
    <Route exact path='/attendance' exact component={Attendance}/>
    <Route exact path = '/announcement' exact component={Announcements} />
    <Route exact path = '/add_announcement' exact component={Form}/>
          
    </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
