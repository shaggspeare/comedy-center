import React from 'react';
import LostPass from '@/components/lostPass/LostPass';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eventiva next.js - Lost Password',
  description: 'Eventiva next.js multipage webdite with next.js and bootstrap',
};
const LostPassword = (): JSX.Element => {
  return (
    <>
      <LostPass />
    </>
  );
};

export default LostPassword;
