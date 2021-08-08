import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import { ProvideAuth } from './hooks/useAuth';
import PublicPage from './PublicPage';
import ProtectedPage from './ProtectedPage';
import LoginPage from './LoginPage';
import PrivateRoute from './PrivateRoute';

function App(): any {
  return (
    <ProvideAuth>
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/public">Public page</Link>
            </li>
            <li>
              <Link to="/protected">Protected page</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/public">
              <PublicPage />
            </Route>
            <PrivateRoute path="/protected">
              <ProtectedPage />
            </PrivateRoute>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
