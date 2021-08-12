import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { useAuth } from './hooks/useAuth';
import Home from './Home';
import LoginPage from './LoginPage';
import PrivateRoute from './PrivateRoute';
import SignoutButton from './SignoutButton';

function App(): any {
  const auth = useAuth();

  return (
    <Router>
      <div className="App">
        {auth.user && <SignoutButton />}
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
