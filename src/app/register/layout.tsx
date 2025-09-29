import React from 'react';
import FooterOne from '@/components/common/footers/FooterOne';
import NavbarEight from '@/components/common/navbars/NavbarEight';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <NavbarEight />
      {children}
      <FooterOne />
    </>
  );
};

export default Layout;
