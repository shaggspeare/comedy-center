import React from 'react';
import NavbarOne from '@/components/common/navbars/NavbarOne';
import FooterOne from '@/components/common/footers/FooterOne';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <NavbarOne />
      {children}
      <FooterOne />
    </>
  );
};

export default Layout;
