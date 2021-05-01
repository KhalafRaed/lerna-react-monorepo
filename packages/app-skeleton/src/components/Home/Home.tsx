import React, { useEffect, useState } from 'react';
import { Axios } from 'core';
import { HelloWorldResponse } from './types';

const Home = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    Axios.get('/hello-world').then((res: HelloWorldResponse) => setMessage(res.data));
  }, []);

  return (
    <>
      <div>Home</div>
      <div>{message}</div>
    </>
  );
};

export default Home;
