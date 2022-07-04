import React from 'react';
import styled from 'styled-components';
import { Image, Nav, Navbar } from 'react-bootstrap';
import TimerIcon from '../image/TimerIcon.png';

const NavStyled = styled(Navbar)`
  display: block;
`;
const ImgNavLinkStyled = styled(Image)``;
const NavLinkStyled = styled(Nav.Link)`
  display: flex;
`;

function NavLink({ remove }) {
  return (
    <div>
      <NavStyled>
        <NavLinkStyled href="/">
          <ImgNavLinkStyled src={TimerIcon.png} />
          <span>Timer</span>
        </NavLinkStyled>
        <Nav.Link href="/report">Report</Nav.Link>
        <Nav.Link onClick={() => remove()}>Log out</Nav.Link>
      </NavStyled>
    </div>
  );
}

export default NavLink;
