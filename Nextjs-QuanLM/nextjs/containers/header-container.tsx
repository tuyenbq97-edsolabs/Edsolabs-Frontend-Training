import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import locator from '../assets/images/locator.png';
import cart from '../assets/images/cart.png';
import { Nav, Navbar, Offcanvas } from 'react-bootstrap';
import Search from '../assets/images/Search.png';
import User from '../assets/images/User.png';
import Arrow from '../assets/images/arrow_forward.png';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '../utils/theme';

const NavStyled = styled(Navbar)`
  padding: 27px 122px 27px 108px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin-bottom: 46px;
  @media screen and (max-width: 1400px) {
    padding: 27px 20px;
  }
  @media screen and (max-width: 840px) {
    padding: 15px 30px;
  }
  @media screen and (max-width: 600px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (max-width: 425px) {
    .nav-link {
      padding-left: 5px !important;
      padding-right: 5px !important;
    }
  }
`;

const StyledNav = styled(Nav)`
  .nav-link {
    padding-left: 25px !important;
    padding-right: 25px !important;
  }
  .nav-link:hover {
    color: ${theme.hoverTheme.lightPink} !important;
  }
`;
const SignUpStyled = styled(Nav.Link)`
  padding-top: 4px;
  &:hover {
    color: ${theme.hoverTheme.lightBlue};
  }
`;
const SeparatorStyled = styled.span`
  border-top: 1px solid #c7c8d9;
  transform: rotate(90deg);
  width: 46px;
`;

const ImageStyled = styled(Navbar.Brand)`
  line-height: 43.8px;
`;

export default function HeaderContainer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <NavStyled expand="xl" className="justify-content-between">
        <div className="d-flex">
          <div className="d-flex align-items-center">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="border-0 me-3"
              onClick={handleShow}
            />
            <Link href="/">
              <Navbar.Brand role="button" className="d-flex">
                <Image src={logo} alt="" />
              </Navbar.Brand>
            </Link>
          </div>

          <StyledNav className="d-none d-xl-flex ">
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
              <span className="me-1">More</span> <Image src={Arrow} alt="" />
            </Nav.Link>
          </StyledNav>
        </div>
        <div className="d-flex d-xl-none align-items-center">
          <Nav.Link>
            <Image src={Search} alt="" />
          </Nav.Link>
          <Nav.Link>
            <Image src={cart} alt="" />
          </Nav.Link>
          <Nav.Link>
            <Image src={User} alt="" />
          </Nav.Link>
        </div>
        <div className="d-none d-lg-none d-xl-flex align-items-center">
          <Nav.Link className="d-flex">
            <Image src={locator} alt="" />
            <span className="text-black ps-3">Locator</span>
          </Nav.Link>
          <SeparatorStyled></SeparatorStyled>
          <Nav.Link>
            <Image src={cart} alt="" />
          </Nav.Link>

          <SignUpStyled>Signup</SignUpStyled>
        </div>
      </NavStyled>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Navbar.Brand role="button">
              <Image src={logo} alt="" />
            </Navbar.Brand>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav.Link className="text-black" href="#home">
            Plans
          </Nav.Link>
          <hr />
          <Nav.Link className="text-black" href="#link">
            Shop
          </Nav.Link>{' '}
          <hr />
          <Nav.Link className="text-black" href="#link">
            Entertainment
          </Nav.Link>{' '}
          <hr />
          <Nav.Link className="text-black" href="#link">
            Trade-in
          </Nav.Link>{' '}
          <hr />
          <Nav.Link className="text-black" href="#link">
            <span className="me-1">More</span> <Image src={Arrow} alt="" />
          </Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
