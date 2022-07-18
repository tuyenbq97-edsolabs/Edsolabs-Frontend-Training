import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Col, Nav, Navbar, Row } from 'react-bootstrap';
import logoFooter from '../assets/images/logo_footer.png';
import up_to_top from '../assets/images/up_to_top.png';
import Image from 'next/image';

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
export const StyledLink = styled.a`
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
  position: fixed;
  bottom: 328px;
  right: 36px;
  background-color: inherit;
  border: none;
  padding: 0;
  display: none;
`;
export const StyledRowTitle = styled(Row)`
  margin-bottom: 24px;
  font-weight: bold;
`;
export const StyledRowContent = styled(Row)`
  margin-bottom: 12px;
`;
const HandleGoTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
};
const LogoFooterStyled = styled.div`
  margin-left: 108px;
`;
export default function FooterContainer() {
  return (
    <div className="mt-5">
      <StyledRow>
        <Col md={5}>
          <LogoFooterStyled>
            <Image
              className="d-lg-inline d-none logo-footer"
              src={logoFooter}
              alt="logo"
            />
          </LogoFooterStyled>
        </Col>
        <Col lg={6}>
          <Row>
            <Col lg={6}>
              <Row className="mb-5">
                <Col>
                  <StyledRowTitle>
                    <StyledLink href="##">Plans</StyledLink>
                  </StyledRowTitle>
                  <StyledRowContent>
                    <StyledLink href="##">Sim-only plans</StyledLink>
                  </StyledRowContent>
                  <StyledRowContent>
                    <StyledLink href="##">Plans with device</StyledLink>
                  </StyledRowContent>
                  <StyledRowContent>
                    <StyledLink href="##">Pre-paid plans</StyledLink>
                  </StyledRowContent>
                </Col>
                <Col>
                  <StyledRowTitle>
                    <StyledLink href="##">Moblies</StyledLink>
                  </StyledRowTitle>
                  <StyledRowContent>
                    <StyledLink href="##">Phones</StyledLink>
                  </StyledRowContent>
                  <StyledRowContent>
                    <StyledLink href="##">Tablets</StyledLink>
                  </StyledRowContent>
                  <StyledRowContent>
                    <StyledLink href="##">Accessories</StyledLink>
                  </StyledRowContent>
                  <StyledRowContent>
                    <StyledLink href="##">Wearables</StyledLink>
                  </StyledRowContent>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <Row>
                <Col>
                  <StyledRowTitle>
                    <StyledLink href="##">News</StyledLink>
                  </StyledRowTitle>
                  <StyledRowContent>
                    <StyledLink href="##">Global news</StyledLink>
                  </StyledRowContent>
                  <StyledRowContent>
                    <StyledLink href="##">Local news</StyledLink>
                  </StyledRowContent>
                  <StyledRowContent>
                    <StyledLink href="##">Blogs</StyledLink>
                  </StyledRowContent>
                </Col>
                <Col>
                  <StyledRowTitle>
                    <StyledLink href="##">Help & About</StyledLink>
                  </StyledRowTitle>
                  <StyledRowContent>
                    <StyledLink href="##">About us</StyledLink>
                  </StyledRowContent>
                  <StyledRowContent>
                    <StyledLink href="##">Why Weiwei?</StyledLink>
                  </StyledRowContent>
                  <StyledRowContent>
                    <StyledLink href="##">Store locator</StyledLink>
                  </StyledRowContent>
                  <StyledRowContent>
                    <StyledLink href="##">Contact us</StyledLink>
                  </StyledRowContent>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={1}></Col>
      </StyledRow>
      <StyledButton className="d-lg-inline" onClick={HandleGoTop}>
        <Image src={up_to_top} alt="" />
        <span id="span" className="d-block text-white">
          Top
        </span>
      </StyledButton>
    </div>
  );
}
