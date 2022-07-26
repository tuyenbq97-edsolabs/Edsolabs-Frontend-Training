import React from 'react';
import { Row, Col, Carousel, Card } from 'react-bootstrap';
import Link from 'next/link';
import { CardNewItem } from '../components/card-new/card-new';
import moment from 'moment';
import styled from 'styled-components';
import CardNewSmall from '../components/card-new-small/card-new-small';
import CardNewLarge from '../components/card-new-large/card-new-large';
import { StyledSubCategoryName } from '../components/card-new-large/styled';
interface TopStoriesContainerProps {
  sliderCard: CardNewItem[];
  newsCardSmall: CardNewItem[];
  newsCardLarge: CardNewItem[];
}
export const StyledCardTextHeader = styled(Card.Text)`
  font-size: 12px;
  margin: 0;
  color: #555770;
  font-family: 'Lato Regular';
`;
export const StyledCarouseTitle = styled.p`
  font-size: 24px;
  font-family: 'Lato Bold';
  color: #ffffff;
  -webkit-line-clamp: 1;
`;
export const StyledCarouseSubTitle = styled.p`
  color: #c7c8d9;
  font-size: 16px;
  font-family: 'Lato Regular';
  -webkit-line-clamp: 2;
`;
export const StyledCarousel = styled(Carousel)`
  .carousel-control-next,
  .carousel-control-prev {
    display: none;
  }
  .carousel-indicators > [data-bs-target] {
    width: 80px;
    height: 4px;
    border-radius: 100px;
    border: 0px;
  }
  .carousel-indicators > [data-bs-target].active {
    background: linear-gradient(180deg, #396afc 0%, #2948ff 100%);
  }
`;
export const StyledImage = styled(Card.Img)`
  min-height: 600px;
  background-size: cover;
  background-position: center center;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px;
`;
export const StyledCarouselCaption = styled(Carousel.Caption)`
  position: absolute;
  text-align: left;
  background: #1c1c28;
  opacity: 0.8;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  padding-left: 24px;
  padding-right: 50px;
`;
const StyledSectionTop = styled.section`
  margin-bottom: 64px;
  @media screen and (max-width: 991.98px) {
    margin: 40px;
  }
`;
export default function TopStoriesContainer({
  sliderCard,
  newsCardSmall,
  newsCardLarge,
}: TopStoriesContainerProps) {
  return (
    <>
      <StyledSectionTop className="mb-5 mt-0 mx-0">
        <Row gx={3} className="mx-0">
          <Col lg={7} className="ps-0 pe-0 pe-lg-2">
            <StyledCarousel>
              {sliderCard.map((item, idx) => (
                <Carousel.Item key={idx}>
                  <Link
                    className="stretched-link"
                    href={{
                      pathname: '/article/[articleSlug]',
                      query: {
                        articleSlug: item.slug,
                      },
                    }}
                  >
                    <StyledImage
                      className="d-block w-100"
                      src={item.imageUrl}
                    />
                  </Link>

                  <StyledSubCategoryName>
                    {item.subCategory.name}
                  </StyledSubCategoryName>
                  <Link
                    className="stretched-link"
                    href={{
                      pathname: '/article/[articleSlug]',
                      query: {
                        articleSlug: item.slug,
                      },
                    }}
                  >
                    <StyledCarouselCaption>
                      <StyledCardTextHeader>
                        {item.source} -{' '}
                        {moment(item.publishDate).format('DD MMM YYYY')}
                      </StyledCardTextHeader>

                      <StyledCarouseTitle className="mb-2 text-truncate text-nowrap overflow-hidden">
                        {item.title}
                      </StyledCarouseTitle>
                      <StyledCarouseSubTitle className="d-none d-md-block text-truncate text-nowrap overflow-hidden">
                        {item.shortDescription}
                      </StyledCarouseSubTitle>
                    </StyledCarouselCaption>
                  </Link>
                </Carousel.Item>
              ))}
            </StyledCarousel>
          </Col>
          <Col lg={5} className="px-0">
            <Row gx={5} className="mx-0">
              {newsCardSmall.map((item, idx) => (
                <Link
                  key={idx}
                  href={{
                    pathname: '/article/[articleSlug]',
                    query: {
                      articleSlug: item.slug,
                    },
                  }}
                >
                  <Col lg={6} className="mt-3 mt-lg-0 ps-0 ps-lg-2 pe-0">
                    <CardNewSmall newsCardSmall={item} />
                  </Col>
                </Link>
              ))}
            </Row>
            <Row className="mx-0">
              {newsCardLarge.map((item, idx) => (
                <Link
                  key={idx}
                  href={{
                    pathname: '/article/[articleSlug]',
                    query: {
                      articleSlug: item.slug,
                    },
                  }}
                >
                  <Col lg={12} className="ps-0 ps-lg-2 pe-0 ">
                    <CardNewLarge newsCardLarge={item} />
                  </Col>
                </Link>
              ))}
            </Row>
          </Col>
        </Row>
      </StyledSectionTop>
    </>
  );
}
