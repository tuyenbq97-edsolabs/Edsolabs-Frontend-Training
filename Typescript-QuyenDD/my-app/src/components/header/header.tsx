import React from 'react';
import logoHeader from '../../assets/icons/logoheader.svg';
import aroundDownd from '../../assets/icons/arounddown.svg';
import location from '../../assets/icons/location.svg';
import shop from '../../assets/icons/shop.svg';
import stand from '../../assets/icons/stand.svg';
import search from '../../assets/icons/search.svg';
import user from '../../assets/icons/user.svg';

import { StyledNavBar, StyledNavLink } from './styled-header';
import { Nav, Navbar, Image } from 'react-bootstrap';
export default function Header() {
  return (
    <StyledNavBar expand="lg">
      <Navbar.Toggle
        className=" px-0 ps-0 border-0"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Brand>
        <Image src={logoHeader} alt="logo-header" />
      </Navbar.Brand>

      <Navbar.Collapse>
        <Nav className="me-auto">
          <StyledNavLink href="#">Plans</StyledNavLink>
          <StyledNavLink href="#">Shop</StyledNavLink>
          <StyledNavLink href="#">Entertainment</StyledNavLink>
          <StyledNavLink href="#">Trade-in</StyledNavLink>
          <StyledNavLink href="#">
            More
            <img className="px-2" src={aroundDownd} alt="around-down" />
          </StyledNavLink>
        </Nav>
      </Navbar.Collapse>
      <div className="d-flex">
        <Nav.Link className="d-none d-md-block" href="#">
          <img className=" px-3" src={location} alt="location" />
          <span className="location">Locator</span>
        </Nav.Link>
        <Nav.Link className="d-md-none" href="#">
          <img src={search} alt="search" />
        </Nav.Link>
        <img className="d-none d-md-block" src={stand} alt="stand" />
        <Nav.Link href="#">
          <img src={shop} alt="shop" />
        </Nav.Link>
        <Nav.Link className=" d-none d-md-block sign-up ps-3" href="#">
          Sign up
        </Nav.Link>
        <Nav.Link href="#">
          <img className="d-md-none" src={user} alt="user" />
        </Nav.Link>
      </div>
    </StyledNavBar>
  );
}
