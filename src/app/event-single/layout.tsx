import React from 'react';
import NavbarSix from '@/components/common/navbars/NavbarSix';
import FooterTwo from '@/components/common/footers/FooterTwo';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <NavbarSix />
      {children}
      <FooterTwo styleNum={4} />
    </>
  );
};

export default Layout;
