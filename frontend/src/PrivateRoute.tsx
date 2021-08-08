import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

export function PrivateRoute({ children, ...rest }: any): any {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }: any) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
