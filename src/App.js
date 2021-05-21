import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeUser from "./components/user/home";
import adm from "./components/adm/adm";
import signUpPatient from "./components/adm/signUpPatient";
import contador from "./components/user/contador";


function App() {  
  return (<Router>
    <div className="App">      

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={HomeUser} />            
            <Route exact path="/adm" component={adm} />
            <Route exact path="/register-patient" component={signUpPatient} />
            <Route exact path="/practice" component={contador} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;