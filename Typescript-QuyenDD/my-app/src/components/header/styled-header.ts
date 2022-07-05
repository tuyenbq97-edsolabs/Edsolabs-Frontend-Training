import { screen } from '@testing-library/react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledNavBar = styled(Navbar)`
  font-size: 18px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Lato Regular';
  padding: 25px 60px 25px 108px;
  margin-bottom: 46px;
  @media screen and (max-width: 576px) {
    padding: 32px 24px;
  }
  .location {
    color: #1c1c28 !important;
    :hover {
      color: #ccc !important;
    }
  }
  .sign-up {
    font-family: 'Lato Bold';
    font-size: 16px;
  }
`;

export const StyledNavLink = styled(Nav.Link)`
  :hover {
    color: #ccc !important;
  }
  padding: 0 24px !important;
  color: #1c1c28 !important;
`;
