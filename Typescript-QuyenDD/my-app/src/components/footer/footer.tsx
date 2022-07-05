import React from 'react';
import {
  StyledA,
  StyledButton,
  StyledColSubFooter,
  StyledFooter,
  StyledImg,
  StyledRow,
  StyledRowContent,
  StyledRowTitle,
  StyledSubFooter,
} from './styled-footer';
import logoFooter from '../../assets/icons/logofooter.svg';
import iconTop from '../../assets/icons/top.svg';
import iconTiktok from '../../assets/icons/tiktok.svg';
import iconInstagram from '../../assets/icons/instagram.svg';
import iconYoutube from '../../assets/icons/youtube.svg';
import iconTwitter from '../../assets/icons/twitter.svg';
import iconFacebook from '../../assets/icons/facebook.svg';
import { Row, Col } from 'react-bootstrap';

export default function Footer() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <StyledFooter>
      <StyledRow className="mx-0 ms-0">
        <Col lg={5}>
          <img
            className="logo-footer d-lg-block d-none "
            src={logoFooter}
            alt="logo"
          />
        </Col>
        <Col lg={6}>
          <Row>
            <Col lg={6}>
              <Row className="m-2 mb-5">
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
            <Col lg={6}>
              <Row className="m-2 mb-5">
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
        <Col lg={1}>
          <Row>
            <StyledButton
              className="d-lg-block d-none p-0 border-0"
              onClick={goToTop}
            >
              <img src={iconTop} alt="button-top " />
              <span className="d-block text-white">Top</span>
            </StyledButton>
          </Row>
        </Col>
      </StyledRow>
      <StyledSubFooter>
        <Row className="sub-footer w-100 text-center">
          <StyledColSubFooter md={5}>
            © 2021 Weiwei.sg. All rights reserved
          </StyledColSubFooter>
          <Col md={3}></Col>
          <Col md={4} className="list-icon">
            <a href="##">
              <StyledImg src={iconTiktok} alt="icon-tiktok" />
            </a>
            <a href="##">
              <StyledImg src={iconInstagram} alt="icon-instagram" />
            </a>
            <a href="##">
              <StyledImg src={iconYoutube} alt="icon-youtube" />
            </a>
            <a href="##">
              <StyledImg src={iconTwitter} alt="icon-twitter" />
            </a>
            <a href="##">
              <StyledImg src={iconFacebook} alt="icon-facebook" />
            </a>
          </Col>
        </Row>
      </StyledSubFooter>
    </StyledFooter>
  );
}
