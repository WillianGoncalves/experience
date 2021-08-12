import React, { useEffect, useState } from 'react';
import { useAuth } from './hooks/useAuth';
import Api from './api/api';

const Home = (): any => {
  const auth = useAuth();
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function getData(): Promise<void> {
      const { data } = await new Api().home();
      setMessage(data.message);
    }

    getData();
  }, []);

  return (
    <div>
      <h1>Welcome {auth.user.email}</h1>
      <span>{message}</span>
    </div>
  );
};

export default Home;
