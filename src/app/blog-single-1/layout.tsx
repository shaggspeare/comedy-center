import React from 'react';
import NavbarSeven from '@/components/common/navbars/NavbarSeven';
import FooterThree from '@/components/common/footers/FooterThree';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <NavbarSeven />
      {children}
      <FooterThree styleNum={8} />
    </>
  );
};

export default Layout;
