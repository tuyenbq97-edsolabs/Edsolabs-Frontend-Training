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
`;
export const StyledCarouseSubTitle = styled.p`
  color: #c7c8d9;
  font-size: 16px;
  font-family: 'Lato Regular';
`;
export const StyledImage = styled.img`
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
  border-radius: 4px;
  min-height: 600px;
  max-height: 600px;
  background-size: cover;
  object-fit: cover;
  background-position: center center;
`;
const StyledSectionTopStories = styled.section`
  margin-bottom: 64px;
`;
export const StyledCarousel = styled(Carousel)`
  .carousel-control-next,
  .carousel-control-prev {
    display: none;
  }
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
export default function TopStoriesContainer({
  sliderCard,
  newsCardSmall,
  newsCardLarge,
}: TopStoriesContainerProps) {
  return (
    <>
      <StyledSectionTopStories>
        <Row gx={3}>
          <Col lg={7} className="p-0">
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
                      className=" position-relative d-block w-100"
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

                      <StyledCarouseTitle className="  text-truncate text-nowrap overflow-hidden">
                        {item.title}
                      </StyledCarouseTitle>
                      <StyledCarouseSubTitle className="  text-truncate text-nowrap overflow-hidden">
                        {item.shortDescription}
                      </StyledCarouseSubTitle>
                    </StyledCarouselCaption>
                  </Link>
                </Carousel.Item>
              ))}
            </StyledCarousel>
          </Col>
          <Col lg={5}>
            <Row gx={3}>
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
                  <Col lg={6} className="mt-lg-0 mt-2 px-0 px-lg-2">
                    <CardNewSmall newsCardSmall={item} />
                  </Col>
                </Link>
              ))}
            </Row>
            <Row>
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
                  <Col lg={12} className="px-2">
                    <CardNewLarge newsCardLarge={item} />
                  </Col>
                </Link>
              ))}
            </Row>
          </Col>
        </Row>
      </StyledSectionTopStories>
    </>
  );
}
