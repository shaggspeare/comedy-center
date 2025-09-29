import LoginForm from '@/components/loginForm/LoginForm';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eventiva next.js - Login',
  description: 'Eventiva next.js multipage webdite with next.js and bootstrap',
};
const LogIn = (): JSX.Element => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default LogIn;
