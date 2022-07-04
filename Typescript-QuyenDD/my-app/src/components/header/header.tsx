import React from 'react';
import logo from '../../assets/icons/logoblue.png';
import aroundDown from '../../assets/icons/arounddown.png';
import location from '../../assets/icons/location.png';
import shop from '../../assets/icons/shop.png';
import stand from '../../assets/icons/stand.png';
import search from '../../assets/icons/search.png';
import user from '../../assets/icons/user.png';

import { StyledNavBar, StyledNavLink, StyledEndNav } from './styled-header';
import { Nav, Navbar, Image } from 'react-bootstrap';
export default function Header() {
  return (
    <>
      <StyledNavBar expand="lg">
        <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav" />
        <Navbar.Brand>
          <Image src={logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Collapse>
          <Nav className="me-auto">
            <StyledNavLink href="#">Plans</StyledNavLink>
            <StyledNavLink href="#">Shop</StyledNavLink>
            <StyledNavLink href="#">Entertainment</StyledNavLink>
            <StyledNavLink href="#">Trade-in</StyledNavLink>
            <StyledNavLink href="#">
              More
              <img className="px-2" src={aroundDown} alt="around-down" />
            </StyledNavLink>
          </Nav>
        </Navbar.Collapse>
        <StyledEndNav>
          <Nav.Link className="hidden-icon" href="#">
            <img className=" px-3" src={location} alt="location" />
            <span className="location">Locator</span>
          </Nav.Link>
          <Nav.Link className="show-icon d-none" href="#">
            <img src={search} alt="search" />
          </Nav.Link>
          <img className="hidden-icon" src={stand} alt="stand" />
          <Nav.Link href="#">
            <img src={shop} alt="shop" />
          </Nav.Link>
          <Nav.Link className=" hidden-icon sign-up ps-3" href="#">
            Sign up
          </Nav.Link>
          <Nav.Link href="#">
            <img className="show-icon d-none" src={user} alt="user" />
          </Nav.Link>
        </StyledEndNav>
      </StyledNavBar>
    </>
  );
}
