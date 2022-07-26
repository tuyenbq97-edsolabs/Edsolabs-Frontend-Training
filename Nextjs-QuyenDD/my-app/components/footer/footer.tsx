import React from 'react';
import {
  StyledFooter,
  StyledNavLinkFooter,
  StyledSectionFooter,
  StyledSectionSubFooter,
  StyledTitleFooter,
} from './styled-footer';
import logoFooter from '../../assets/icons/logofooter.svg';
import iconTop from '../../assets/icons/top.svg';
import iconTiktok from '../../assets/icons/tiktok.svg';
import iconInstagram from '../../assets/icons/instagram.svg';
import iconYoutube from '../../assets/icons/youtube.svg';
import iconTwitter from '../../assets/icons/twitter.svg';
import iconFacebook from '../../assets/icons/facebook.svg';
import { Row, Col, Container, Nav } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
export default function Footer() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <StyledFooter>
      <StyledSectionFooter className="mt-auto">
        <Container>
          <Row className="d-flex justify-content-end">
            <Col md={4}>
              <Link href="/">
                <Image
                  role="button"
                  className="d-none d-md-block"
                  src={logoFooter}
                  alt="logo-footer"
                />
              </Link>
            </Col>
            <Col md={8}>
              <Row>
                <Col className="mb-5 mb-md-0 col-6 col-lg-3">
                  <StyledTitleFooter className="mb-4">Plans</StyledTitleFooter>
                  <Nav className="flex-column">
                    <StyledNavLinkFooter className="px-0 py-1">
                      Sim-only plans
                    </StyledNavLinkFooter>
                    <StyledNavLinkFooter className="px-0 py-1">
                      Plans with device
                    </StyledNavLinkFooter>
                    <StyledNavLinkFooter className="px-0 py-1">
                      Pre-paid plans
                    </StyledNavLinkFooter>
                  </Nav>
                </Col>
                <Col className="mb-5 mb-md-0 col-6 col-lg-3">
                  <StyledTitleFooter className="mb-4">
                    Mobiles
                  </StyledTitleFooter>
                  <Nav className="flex-column">
                    <StyledNavLinkFooter className="px-0 py-1">
                      Phones
                    </StyledNavLinkFooter>
                    <StyledNavLinkFooter className="px-0 py-1">
                      Tablets
                    </StyledNavLinkFooter>
                    <StyledNavLinkFooter className="px-0 py-1">
                      Accessories
                    </StyledNavLinkFooter>
                    <StyledNavLinkFooter className="px-0 py-1">
                      Wearables
                    </StyledNavLinkFooter>
                  </Nav>
                </Col>

                <Col className="mb-5 mb-md-0 col-6 col-lg-3">
                  <StyledTitleFooter className="mb-4">News</StyledTitleFooter>
                  <Nav className="flex-column">
                    <StyledNavLinkFooter className="px-0 py-1">
                      Global news
                    </StyledNavLinkFooter>
                    <StyledNavLinkFooter className="px-0 py-1">
                      Local news
                    </StyledNavLinkFooter>
                    <StyledNavLinkFooter className="px-0 py-1">
                      Blogs
                    </StyledNavLinkFooter>
                  </Nav>
                </Col>

                <Col className="mb-5 mb-md-0 col-6 col-lg-3">
                  <StyledTitleFooter className="mb-4">
                    Help & About
                  </StyledTitleFooter>
                  <Nav className="flex-column">
                    <StyledNavLinkFooter className="px-0 py-1">
                      About us
                    </StyledNavLinkFooter>
                    <StyledNavLinkFooter className="px-0 py-1">
                      Why Weiwei?
                    </StyledNavLinkFooter>
                    <StyledNavLinkFooter className="px-0 py-1">
                      Store locator
                    </StyledNavLinkFooter>
                    <StyledNavLinkFooter className="px-0 py-1">
                      Contact us
                    </StyledNavLinkFooter>
                  </Nav>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <StyledSectionSubFooter>
          <Container>
            <Row>
              <Col className="d-flex flex-column flex-md-row justify-content-md-between justify-content-center align-items-center py-3 py-md-0">
                <div className="text-label">
                  © 2021 Weiwei.sg. All rights reserved
                </div>
                <div className="order-first order-md-last">
                  <a className="list-icon">
                    <Image src={iconTiktok} alt="icon-tiktok" />
                  </a>
                  <a className="list-icon">
                    <Image src={iconInstagram} alt="icon-instagram" />
                  </a>
                  <a className="list-icon">
                    <Image src={iconYoutube} alt="icon-youtube" />
                  </a>
                  <a className="list-icon">
                    <Image src={iconTwitter} alt="icon-twitter" />
                  </a>

                  <a className="list-icon">
                    <Image src={iconFacebook} alt="icon-facebook" />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </StyledSectionSubFooter>
      </StyledSectionFooter>
      <div className="go-to-top" onClick={goToTop}>
        <Image src={iconTop} alt="button-top" />
        <span>Top</span>
      </div>
    </StyledFooter>
  );
}
