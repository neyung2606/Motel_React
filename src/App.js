import React from 'react';
import './App.css';
import Login from './components/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './components/admin/Admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/admin/*" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
