import moment from 'moment';
import React, { useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CardNewHeaderLg from '../components/card-new-header-lg/card-new-header-lg';
import CardNewHeaderSm from '../components/card-new-header-sm/card-new-header.-sm';
import { SubCategoryNameStyled } from '../components/card-new-header-sm/style';
import { ApiGlobalNews } from './global-new-container';

const LinkStyled = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
`;

interface ApiHeaderNews {
  dbNewsHeaderSm: any[];
  dbNewsHeaderLg: any[];
  slider: any[];
}

export const RowStyled = styled(Row)`
  margin-left: 0px;
  margin-right: 0px;
`;

const CarouselCaptionStyled = styled(Carousel.Caption)`
  background: #1c1c28;
  opacity: 0.8;
  bottom: 0;
  width: 100%;
`;
const StyledCarousel = styled(Carousel)`
  .carousel-inner {
    border-radius: 0px 0px 4px 4px;
  }
  .carousel-control-next,
  .carousel-control-prev {
    display: none;
  }
  .carousel-caption {
    left: 0px;
    text-align: left;
    padding-left: 3.4%;
    padding-right: 7%;
  }
  .carousel-indicators [data-bs-target] {
    width: 15%;
  }
  &:hover {
    box-shadow: 0px 2px 4px rgba(47, 43, 43, 0.397);
  }
`;

const ShortDescriptionStyled = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #c7c8d9;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 40px;
`;
const SrouceStyle = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: #c7c8d9;
`;
const TitleStyled = styled.p`
  font-size: 24px;
  line-height: 32px;
  margin: 8px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const TitleHeaderStyled = styled.p`
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 24px;
  color: #555770;
`;

const ImgStyled = styled.img`
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
  border-radius: 4px;
`;

export default function HeaderNewContainer({
  dbNewsHeaderSm,
  slider,
  dbNewsHeaderLg,
}: ApiHeaderNews) {
  return (
    <Container className="p-0">
      <LinkStyled to="/">NEWS /</LinkStyled>
      <h3 className="fw-bold">Global news</h3>
      <TitleHeaderStyled>
        Always up-to-date to latest telecommuncation news.
      </TitleHeaderStyled>
      <RowStyled>
        <Col lg={6} className="pe-2 pb-3 ps-0  h-100">
          <StyledCarousel className="m-0">
            {slider.map((items, idx) => (
              <Carousel.Item key={idx}>
                <SubCategoryNameStyled>
                  {items.subCategory.name}
                </SubCategoryNameStyled>
                <ImgStyled
                  className="d-block w-100"
                  src={items.imageUrl}
                  alt="First slide"
                />
                <CarouselCaptionStyled>
                  <SrouceStyle>{items.source}</SrouceStyle>
                  {' - '}
                  <SrouceStyle>
                    {moment(items.publishDate).format('MMM DD YY')}
                  </SrouceStyle>
                  <TitleStyled>{items.title}</TitleStyled>
                  <ShortDescriptionStyled>
                    {items.shortDescription}
                  </ShortDescriptionStyled>
                </CarouselCaptionStyled>
              </Carousel.Item>
            ))}
          </StyledCarousel>
        </Col>
        <Col className="p-0" lg={6}>
          <RowStyled>
            {dbNewsHeaderSm.map((item, idx) => (
              <Col className="pb-3 px-2" md={6} key={idx}>
                <CardNewHeaderSm newsHeaderSm={item} />
              </Col>
            ))}
          </RowStyled>
          <RowStyled>
            {dbNewsHeaderLg.map((item, idx) => (
              <Col className="px-2" key={idx}>
                <CardNewHeaderLg newsHeaderLg={item} />
              </Col>
            ))}
          </RowStyled>
        </Col>
      </RowStyled>
    </Container>
  );
}
