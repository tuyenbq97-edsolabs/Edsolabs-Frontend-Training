import React from 'react';
import styled from 'styled-components';
import { Button, Col, Image, Nav, Navbar, Row } from 'react-bootstrap';
import logoFooter from '../images/logo_footer.png';
import up_to_top from '../images/up_to_top.png';

export const StyledFooter = styled.div`
  height: 440px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  color: #f2f2f5;
  background: #1c1c28;
  width: 100%;
`;

export const StyledRow = styled(Row)`
  padding-top: 64px;
  padding-bottom: 136px;
  margin-left: 0px;
  margin-right: 0px;
  background-color: #1c1c28;
  .logo-footer {
    margin-left: 108px;
    padding-top: 25px;
    padding-bottom: 136px;
  }
`;
export const StyledA = styled.a`
  color: #f2f2f5 !important;
  text-decoration: none;
  &:hover {
    color: #bfb0b0 !important;
  }
`;

export const StyledSubFooter = styled.div`
  align-items: center;
  justify-content: space-around;
  display: flex;
  a {
    padding: 0 10px;
  }
  padding: 24px 0px;
  background-color: #000;
`;
export const StyledButton = styled.button`
  background-color: inherit;
  border: none;
  padding: 0;
  background: #1c1c28;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const StyledRowTitle = styled(Row)`
  margin-bottom: 18px;
  font-weight: bold;
`;
export const StyledRowContent = styled(Row)`
  margin-top: 12px;
`;
const ImageStyled = styled.img`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export default function FooterContainer() {
  return (
    <StyledRow>
      <Col md={5}>
        <ImageStyled className="logo-footer" src={logoFooter} alt="logo" />
      </Col>
      <Col md={6}>
        <Row>
          <Col md={6}>
            <Row className="mb-5">
              <Col>
                <StyledRowTitle>
                  <StyledA href="##">Plans</StyledA>
                </StyledRowTitle>
                <StyledRowContent>
                  <StyledA href="##">Sim-only plans</StyledA>
                </StyledRowContent>
                <StyledRowContent>
                  <StyledA href="##">Plans with device</StyledA>
                </StyledRowContent>
                <StyledRowContent>
                  <StyledA href="##">Pre-paid plans</StyledA>
                </StyledRowContent>
              </Col>
              <Col>
                <StyledRowTitle>
                  <StyledA href="##">Moblies</StyledA>
                </StyledRowTitle>
                <StyledRowContent>
                  <StyledA href="##">Phones</StyledA>
                </StyledRowContent>
                <StyledRowContent>
                  <StyledA href="##">Tablets</StyledA>
                </StyledRowContent>
                <StyledRowContent>
                  <StyledA href="##">Accessories</StyledA>
                </StyledRowContent>
                <StyledRowContent>
                  <StyledA href="##">Wearables</StyledA>
                </StyledRowContent>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row className="mb-5">
              <Col>
                <StyledRowTitle>
                  <StyledA href="##">News</StyledA>
                </StyledRowTitle>
                <StyledRowContent>
                  <StyledA href="##">Global news</StyledA>
                </StyledRowContent>
                <StyledRowContent>
                  <StyledA href="##">Local news</StyledA>
                </StyledRowContent>
                <StyledRowContent>
                  <StyledA href="##">Blogs</StyledA>
                </StyledRowContent>
              </Col>
              <Col>
                <StyledRowTitle>
                  <StyledA href="##">Help & About</StyledA>
                </StyledRowTitle>
                <StyledRowContent>
                  <StyledA href="##">About us</StyledA>
                </StyledRowContent>
                <StyledRowContent>
                  <StyledA href="##">Why Weiwei?</StyledA>
                </StyledRowContent>
                <StyledRowContent>
                  <StyledA href="##">Store locator</StyledA>
                </StyledRowContent>
                <StyledRowContent>
                  <StyledA href="##">Contact us</StyledA>
                </StyledRowContent>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col md={1}>
        <Row>
          <StyledButton>
            <img src={up_to_top} alt="button-top " />
            <span id="span" className="d-block text-white">
              Top
            </span>
          </StyledButton>
        </Row>
      </Col>
    </StyledRow>
  );
}
