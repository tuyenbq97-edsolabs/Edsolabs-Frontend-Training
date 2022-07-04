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
import logo from '../../assets/icons/logowhite.png';
import tiktok from '../../assets/icons/tiktok.png';
import instagram from '../../assets/icons/instagram.png';
import youtube from '../../assets/icons/youtube.png';
import twitter from '../../assets/icons/twitter.png';
import facebook from '../../assets/icons/facebook.png';
import top from '../../assets/icons/top.png';

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
      <StyledRow>
        <Col md={5}>
          <img className="logo-footer" src={logo} alt="logo" />
        </Col>
        <Col md={6}>
          <Row>
            <Col md={6}>
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
            <Col md={6}>
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
        <Col md={1}>
          <Row>
            <StyledButton onClick={goToTop}>
              <img src={top} alt="button-top " />
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
              <StyledImg src={tiktok} alt="icon-tiktok" />
            </a>
            <a href="##">
              <StyledImg src={instagram} alt="icon-instagram" />
            </a>
            <a href="##">
              <StyledImg src={youtube} alt="icon-youtube" />
            </a>
            <a href="##">
              <StyledImg src={twitter} alt="icon-twitter" />
            </a>
            <a href="##">
              <StyledImg src={facebook} alt="icon-facebook" />
            </a>
          </Col>
        </Row>
      </StyledSubFooter>
    </StyledFooter>
  );
}
