import React from 'react';
import NavbarThree from '@/components/common/navbars/NavbarThree';
import FooterTwo from '@/components/common/footers/FooterTwo';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <NavbarThree />
      {children}
      <FooterTwo styleNum={4} />
    </>
  );
};

export default Layout;
