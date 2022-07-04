import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import FbIcon from '../images/fb_icon.png';
import TwitterIcon from '../images/twitter_icon.png';
import YoutebuIcon from '../images/youtube_icon.png';
import InstagramIcon from '../images/instagram_icon.png';
const SubFooterStyled = styled.div`
  padding: 24px 8.7%;
  background-color: black;
  width: 100%;
  color: white;
  mix-blend-mode: multiply;
  display: flex;
  justify-content: space-between;
`;
const IconSubFooterStyled = styled.img`
  background-color: #000000;
  border-radius: 50%;
  margin: 0 0.5rem;
  @media only screen and (max-width: 992px) {
    /* display: flex; */
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
    <SubFooterStyled>
      <RowStyled>
        <Col lg={5}>© 2021 Weiwei.sg. All rights reserved</Col>
        <Col lg={4}></Col>
        <Col lg={3} className="">
          <IconSubFooterStyled src={FbIcon} />
          <IconSubFooterStyled src={TwitterIcon} />
          <IconSubFooterStyled src={YoutebuIcon} />
          <IconSubFooterStyled src={InstagramIcon} />
        </Col>
      </RowStyled>
    </SubFooterStyled>
  );
}
