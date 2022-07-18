import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import locator from '../assets/images/locator.png';
import cart from '../assets/images/cart.png';
import { Nav, Navbar } from 'react-bootstrap';
import Search from '../assets/images/Search.png';
import User from '../assets/images/User.png';
import Arrow from '../assets/images/arrow_forward.png';
import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <NavStyled expand="xl">
      <div className="d-flex align-items-center">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 me-3"
        />
        <Link href="/">
          <Navbar.Brand role="button">
            <Image src={logo} alt="" />
          </Navbar.Brand>
        </Link>
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
            <span className="me-1">More</span> <Image src={Arrow} alt="" />
          </Nav.Link>
        </StyledNav>
      </Navbar.Collapse>
      <div className="d-flex d-sm-none d-flex align-items-center">
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
      <div className="d-xl-none d-none d-sm-flex d-flex align-items-center">
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
    </NavStyled>
  );
}
