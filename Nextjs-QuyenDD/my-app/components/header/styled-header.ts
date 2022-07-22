import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import Image from 'next/image';
export const StyledNavBar = styled(Navbar)`
  padding: 0px !important;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 4px;
  min-height: 82px;
  font-size: 18px;
  font-family: 'Lato Regular';
  .location {
    color: #1c1c28 !important;
    :hover {
      color: #ccc !important;
    }
  }
  .sign-up {
    font-family: 'Lato Bold';
    font-size: 16px;
    background: linear-gradient(180deg, #396afc 0%, #2948ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

export const StyledNavLink = styled(Nav.Link)`
  line-height: 82px;
  padding: 0 1.5rem;
  &:hover {
    color: #ccc !important;
  }
  padding: 0 24px !important;
  color: #1c1c28 !important;
`;
export const StyledImgLocation = styled(Image)`
  width: 15px !important;
  height: 25px !important;
`;
