import './App.css';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import { firebase } from './Firebase/firebase';

function App() {

  const [isUserSignedIn, setIsUserSignedIn] = useState(true);
  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      return setIsUserSignedIn(true);
    }

    setIsUserSignedIn(false);
  })

  if(isUserSignedIn === true){
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    );
  }

  else {
    return (
      <Router>
        <Switch>
          <Route path="/" component={SignIn}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
