'use client';
import React, { useEffect, useState, ReactNode } from 'react';
import CursorProvider from '@/context/CursorProvider';
import { ThemeProvider } from '@/context/ThemeProvider';
import Loading from '@/components/common/Loading';

interface LayoutChildrenProps {
  children: ReactNode;
}

const LayoutChildren: React.FC<LayoutChildrenProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <ThemeProvider>
        <CursorProvider>{children}</CursorProvider>
      </ThemeProvider>
    </>
  );
};

export default LayoutChildren;