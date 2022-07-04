import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import locator from '../images/locator.png';
import cart from '../images/cart.png';
import { Image, Nav, Navbar } from 'react-bootstrap';
import Search from '../images/Search.png';
import User from '../images/User.png';
import Arrow from '../images/arrow_forward.png';

const NavStyled = styled(Navbar)`
  padding: 1% 8%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin-bottom: 46px;
`;

const StyledNav = styled(Nav)`
  .nav-link {
    padding-left: 25px !important;
    padding-right: 25px !important;
  }
  .nav-link:hover {
    color: #8a7272 !important;
  }
`;
const SignUpStyled = styled(Nav.Link)`
  padding-top: 4px;
  &:hover {
    color: #1800ed8a;
  }
`;
const SeparatorStyled = styled.span`
  border-top: 1px solid #c7c8d9;
  transform: rotate(90deg);
  width: 46px;
`;

export default function HeaderContainer() {
  const [match, setMatch] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 1200px)')
      .addEventListener('change', (e) => setMatch(e.matches));
  }, []);

  return (
    <NavStyled expand="xl">
      <div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 me-3"
        />
        <Navbar.Brand>
          <Image fluid src={logo} />
        </Navbar.Brand>
      </div>

      <Navbar.Collapse className="justify-content-between">
        <StyledNav>
          <Nav.Link className="text-black" href="#home">
            Plans
          </Nav.Link>
          <Nav.Link className="text-black" href="#link">
            Shop
          </Nav.Link>
          <Nav.Link className="text-black" href="#link">
            Entertainment
          </Nav.Link>
          <Nav.Link className="text-black" href="#link">
            Trade-in
          </Nav.Link>
          <Nav.Link className="text-black" href="#link">
            More <img className="ms-1" src={Arrow} alt="" />
          </Nav.Link>
        </StyledNav>
      </Navbar.Collapse>
      {match && (
        <div className=" d-flex align-items-center" id="display">
          <Nav.Link className="d-flex">
            <Image src={locator} className="pe-3" />
            <span className="text-black">Locator</span>
          </Nav.Link>

          <SeparatorStyled></SeparatorStyled>
          <Nav.Link>
            <Image src={cart} />
          </Nav.Link>

          <SignUpStyled>Signup</SignUpStyled>
        </div>
      )}
      {!match && (
        <div className=" d-flex align-items-center" id="displayNone">
          <Nav.Link>
            <Image src={Search} />
          </Nav.Link>
          <Nav.Link>
            <Image src={cart} />
          </Nav.Link>
          <Nav.Link>
            <Image src={User} />
          </Nav.Link>
        </div>
      )}
    </NavStyled>
  );
}
