import React from 'react';
import { useAuth } from './hooks/useAuth';

export function SignoutButton(): any {
  const auth = useAuth();

  return (
    <button onClick={auth.signout} type="button">
      Sign out
    </button>
  );
}

export default SignoutButton;
