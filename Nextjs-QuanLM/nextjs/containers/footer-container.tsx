import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Col, Nav, Navbar, Row } from 'react-bootstrap';
import logoFooter from '../assets/images/logo_footer.png';
import up_to_top from '../assets/images/up_to_top.png';
import Image from 'next/image';
import { theme } from '../utils/theme';

export const StyledRow = styled(Row)`
  padding-top: 64px;
  padding-bottom: 136px;
  margin-left: 0px;
  margin-right: 0px;
  background-color: ${({ theme }) => theme.Neutral_L10};
  .logo-footer {
    margin-left: 108px;
    padding-top: 25px;
    padding-bottom: 136px;
  }
  @media only screen and (max-width: 992px) {
    padding-top: 32px;
    padding-left: 24px;
    padding-bottom: 26px;
  }
`;
export const StyledLink = styled.a`
  color: ${({ theme }) => theme.Neutral_L3} !important;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.Neutral_L3} !important;
  }
`;
export const StyledButton = styled.button`
  bottom: 50px;
  right: 36px;
  background-color: inherit;
`;
const HandleGoTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
};

const ColStyled = styled(Col)`
  @media only screen and (max-width: 992px) {
    width: 50%;
    padding-bottom: 52px;
  }
  @media only screen and (max-width: 350px) {
    width: 100%;
    padding-bottom: 52px;
  }
`;

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
            <ColStyled lg={3}>
              <Row className="mb-4 fw-bold">
                <StyledLink href="##">Plans</StyledLink>
              </Row>
              <Row className="mb-2">
                <StyledLink href="##">Sim-only plans</StyledLink>
              </Row>
              <Row className="mb-2">
                <StyledLink href="##">Plans with device</StyledLink>
              </Row>
              <Row className="mb-2">
                <StyledLink href="##">Pre-paid plans</StyledLink>
              </Row>
            </ColStyled>
            <ColStyled lg={3}>
              <Row className="mb-4 fw-bold">
                <StyledLink href="##">Moblies</StyledLink>
              </Row>
              <Row className="mb-2">
                <StyledLink href="##">Phones</StyledLink>
              </Row>
              <Row className="mb-2">
                <StyledLink href="##">Tablets</StyledLink>
              </Row>
              <Row className="mb-2">
                <StyledLink href="##">Accessories</StyledLink>
              </Row>
              <Row className="mb-2">
                <StyledLink href="##">Wearables</StyledLink>
              </Row>
            </ColStyled>

            <ColStyled lg={3}>
              <Row className="mb-4 fw-bold">
                <StyledLink href="##">News</StyledLink>
              </Row>
              <Row className="mb-2">
                <StyledLink href="##">Global news</StyledLink>
              </Row>
              <Row className="mb-2">
                <StyledLink href="##">Local news</StyledLink>
              </Row>
              <Row className="mb-2">
                <StyledLink href="##">Blogs</StyledLink>
              </Row>
            </ColStyled>
            <ColStyled lg={3}>
              <Row className="mb-4 fw-bold">
                <StyledLink href="##">Help & About</StyledLink>
              </Row>
              <Row className="mb-2">
                <StyledLink href="##">About us</StyledLink>
              </Row>
              <Row className="mb-2">
                <StyledLink href="##">Why Weiwei?</StyledLink>
              </Row>
              <Row className="mb-2">
                <StyledLink href="##">Store locator</StyledLink>
              </Row>
              <Row className="mb-2">
                <StyledLink href="##">Contact us</StyledLink>
              </Row>
            </ColStyled>
          </Row>
        </Col>
        <Col md={1}></Col>
      </StyledRow>
      <StyledButton
        className="d-lg-inline d-none position-fixed border-0 p-0"
        onClick={HandleGoTop}
      >
        <Image src={up_to_top} alt="" />
        <span id="span" className="d-block text-white">
          Top
        </span>
      </StyledButton>
    </div>
  );
}
