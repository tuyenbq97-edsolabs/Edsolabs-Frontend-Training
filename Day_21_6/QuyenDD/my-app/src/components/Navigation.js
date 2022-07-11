import React from 'react';
import styled from 'styled-components';
import { Image, Nav, Navbar } from 'react-bootstrap';
import Clock from '../images/clock.svg';
import BarChart from '../images/barchart.svg';
import LogOut from '../images/logout.svg';
const StyledNav = styled(Navbar)`
  display: block;
`;
const StyledNavLink = styled(Nav.Link)`
  display: flex;
`;
const StyledIcon = styled(Image)`
  width: 15%;
`;
export default function Navigation({ remove }) {
  return (
    <div>
      <StyledNav>
        <StyledNavLink href="/">
          <StyledIcon className="mx-3" src={Clock}></StyledIcon>
          <span className="text-dark fw-bold">Timer</span>
        </StyledNavLink>

        <StyledNavLink href="/report">
          <StyledIcon className="mx-3" src={BarChart}></StyledIcon>
          <span className="text-dark fw-bold">Report</span>
        </StyledNavLink>

        <StyledNavLink onClick={() => remove()}>
          <StyledIcon className="mx-3" src={LogOut}></StyledIcon>
          <span className="text-dark fw-bold">Log out</span>
        </StyledNavLink>
      </StyledNav>
    </div>
  );
}
