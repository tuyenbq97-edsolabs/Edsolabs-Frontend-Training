import React from 'react';
import logoHeader from '../../assets/icons/logoheader.svg';
import aroundDownd from '../../assets/icons/arounddown.svg';
import location from '../../assets/icons/location.svg';
import shop from '../../assets/icons/shop.svg';
import stand from '../../assets/icons/stand.svg';
import search from '../../assets/icons/search.svg';
import user from '../../assets/icons/user.svg';
import Image from 'next/image';

import { StyledNavBar, StyledNavLink } from './styled-header';
import { Nav, Navbar } from 'react-bootstrap';
export default function Header() {
  return (
    <StyledNavBar expand="lg" bg="light">
      <div className="container-xxl justify-content-lg-start">
        <Navbar.Toggle
          className="p-0 border-0"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Brand className="ms-3 ms-xl-0 me-4">
          <Image src={logoHeader} alt="logo-header" />
        </Navbar.Brand>

        <Navbar.Collapse>
          <Nav className="me-auto">
            <StyledNavLink href="#">Plans</StyledNavLink>
            <StyledNavLink href="#">Shop</StyledNavLink>
            <StyledNavLink href="#">Entertainment</StyledNavLink>
            <StyledNavLink href="#">Trade-in</StyledNavLink>
            <StyledNavLink href="#">
              <span className="me-2">More</span>
              <Image src={aroundDownd} alt="round-down" />
            </StyledNavLink>
          </Nav>
        </Navbar.Collapse>
        <Nav className="ms-auto flex-row align-items-center d-none d-lg-flex">
          <StyledNavLink className="d-flex align-items-center" href="#">
            <Image className="icon-location" src={location} alt="location" />
            <span className="location ms-4">Locator</span>
          </StyledNavLink>

          <Image src={stand} alt="stand" />
          <Nav.Link className="d-flex p-0 me-4 ms-4" href="#">
            <Image src={shop} alt="shop" />
          </Nav.Link>
          <Nav.Link className="sign-up p-0" href="#">
            Sign up
          </Nav.Link>
        </Nav>
        <div className="flex-row d-flex ms-auto d-lg-none align-items-center">
          <Nav.Link className="me-4">
            <Image src={search} alt="search" />
          </Nav.Link>
          <Nav.Link className="me-4">
            <Image src={shop} alt="shop" />
          </Nav.Link>
          <Nav.Link className="me-4">
            <Image src={user} alt="user" />
          </Nav.Link>
        </div>
      </div>
    </StyledNavBar>
  );
}
