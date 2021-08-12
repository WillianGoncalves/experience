import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

const LoginPage = (): any => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();

  const onSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    await auth.signin(email, password);
    history.replace('/');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">
            <div>Email</div>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            <div>Password</div>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <div>
          <button type="submit">Enter</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
