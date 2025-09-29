import RegisterForm from '@/components/RegisterForm/RegisterForm';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eventiva next.js - Register',
  description: 'Eventiva next.js multipage webdite with next.js and bootstrap',
};
const Register = (): JSX.Element => {
  return (
    <>
      <RegisterForm />
    </>
  );
};

export default Register;
