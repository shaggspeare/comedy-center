import React from 'react'
import NavbarSix from '@/components/common/navbars/NavbarSix'
import FooterTwo from '@/components/common/footers/FooterTwo'

const Layout = ({ children }) => {
    return (
        <>
            <NavbarSix/>
            {children}
            <FooterTwo styleNum={4} />
        </>
    )
}

export default Layout