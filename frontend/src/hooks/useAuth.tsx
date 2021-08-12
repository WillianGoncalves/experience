import React, { useState, useContext, createContext } from 'react';
import Api from '../api/api';

const AuthContext = createContext({});

export function useAuth(): any {
  return useContext(AuthContext);
}

function useProvideAuth(): any {
  const [user, setUser] = useState(null);

  const signin = async (email: string, password: string): Promise<void> => {
    const { user: loggedUser, token }: any = await new Api().signin({
      email,
      password,
    });
    localStorage.setItem('token', token);
    setUser(loggedUser);
  };

  const signout = async (): Promise<void> => {
    localStorage.removeItem('token');
    setUser(null);
    await new Api().signout();
  };

  return {
    user,
    signin,
    signout,
  };
}

export function ProvideAuth({ children }: any): any {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
