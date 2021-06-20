import React from 'react';
import styled from 'styled-components';

import LogoSVGIcon from '../icons/LogoSVGIcon';

const Navbar = () => {
    return (
      <NavbarWrapper>
          <StyledNavbar>
            <LogoSVGIcon classes="site-logo" />
          </StyledNavbar>
      </NavbarWrapper>  
    )
}

export default Navbar


// Styles

const NavbarWrapper = styled.header``;

const StyledNavbar = styled.nav`
    width : 100%;
    padding: 20px 10%;
    display: flex;
    justify-content: flex-start;

    .site-logo {
        cursor: pointer;
    }

`;