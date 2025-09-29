import React from 'react';
import NavbarFour from '@/components/common/navbars/NavbarFour';
import FooterThree from '@/components/common/footers/FooterThree';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <NavbarFour />
      {children}
      <FooterThree styleNum={7} />
    </>
  );
};

export default Layout;
