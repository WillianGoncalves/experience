import React, { useState } from 'react';

const LoginPage = (): any => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: any): void => {
    e.preventDefault();
    console.log(`request to sign_in with ${email} and ${password}`);
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
