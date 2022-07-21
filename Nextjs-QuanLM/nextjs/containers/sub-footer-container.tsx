import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import FbIcon from '../assets/images/fb_icon.png';
import TwitterIcon from '../assets/images/twitter_icon.png';
import YoutebuIcon from '../assets/images/youtube_icon.png';
import InstagramIcon from '../assets/images/instagram_icon.png';
import Image from 'next/image';
import { theme } from '../utils/theme';
const SubFooterStyled = styled.div`
  padding: 24px 165px;
  background-color: ${theme.darkBlack};
  width: 100%;
  color: ${theme.white};
  mix-blend-mode: multiply;
  @media only screen and (max-width: 992px) {
    /* display: flex; */
    padding: 24px 0px;
  }
`;
const IconSubFooterStyled = styled(Image)`
  background-color: ${theme.darkBlack};
  border-radius: 50%;
  margin: 0 8px;
  @media only screen and (max-width: 992px) {
    margin-bottom: 16px;
  }
`;
const RowStyled = styled(Row)`
  width: 100%;
  @media only screen and (max-width: 992px) {
    text-align: center;
    flex-direction: column-reverse;
  }
`;

export default function SubFooterContainer() {
  return (
    <SubFooterStyled className="d-flex justify-content-between">
      <RowStyled>
        <Col lg={5}>© 2021 Weiwei.sg. All rights reserved</Col>
        <Col lg={4}></Col>
        <Col lg={3} className="d-flex justify-content-center">
          <div className="me-2 ms-2">
            <IconSubFooterStyled src={FbIcon} />
          </div>
          <div className="me-2 ms-2">
            <IconSubFooterStyled src={TwitterIcon} />
          </div>
          <div className="me-2 ms-2">
            <IconSubFooterStyled src={YoutebuIcon} />
          </div>
          <div className="me-2 ms-2">
            <IconSubFooterStyled src={InstagramIcon} />
          </div>
        </Col>
      </RowStyled>
    </SubFooterStyled>
  );
}
