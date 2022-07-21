import moment from 'moment';
import Link from 'next/link';
import React, { useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import CardNewHeaderLg from '../components/card-new-header/card-new-header-lg/card-new-header-lg';
import CardNewHeaderSm from '../components/card-new-header/card-new-header-sm/card-new-header.-sm';
import { SubCategoryNameStyled } from '../components/card-new-header/card-new-header-sm/style';
import { CardNewItem } from '../components/card-new/vertical -card/card-new';
import { theme } from '../utils/theme';

export const LinkStyled = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  .ps-2 {
    padding-left: 1rem !important;
  }
`;

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
    padding-left: 24px;
    padding-right: 51px;
  }
  .carousel-indicators [data-bs-target] {
    width: 15%;
  }
  &:hover {
    box-shadow: 0px 2px 4px rgba(47, 43, 43, 0.397);
  }
`;

export const ShortDescriptionStyled = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${theme.secondaryWhite};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 40px;
`;
export const SrouceStyle = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: ${theme.secondaryWhite};
`;
export const TitleStyled = styled.p`
  font-size: 24px;
  line-height: 32px;
  margin: 8px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const TitleHeaderStyled = styled.p`
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.lightBlack};
`;

const ImgStyled = styled.img`
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
  border-radius: 4px;
  max-height: 600px;
  object-fit: cover;
`;

interface CardNewProps {
  dbNewsHeaderSm: CardNewItem[];
  dbNewsHeaderLg: CardNewItem[];
  slider: CardNewItem[];
}

export default function HeaderNewContainer({
  dbNewsHeaderSm,
  slider,
  dbNewsHeaderLg,
}: CardNewProps) {
  return (
    <>
      <RowStyled>
        <Col lg={7} className="pe-2 pb-3 ps-2 h-100">
          <StyledCarousel className="m-0">
            {slider.map((items, idx) => (
              <Carousel.Item key={idx}>
                <SubCategoryNameStyled>
                  {items.subCategory.name}
                </SubCategoryNameStyled>
                <Link
                  className="stretched-link"
                  href={{
                    pathname: '/article/[articleSlug]',
                    query: {
                      articleSlug: items.slug,
                    },
                  }}
                >
                  <ImgStyled
                    className="d-block w-100"
                    src={items.imageUrl}
                    alt="First slide"
                  />
                </Link>
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
        <Col className="p-0" lg={5}>
          <RowStyled>
            {dbNewsHeaderSm.map((item, idx) => (
              <Link
                key={idx}
                href={{
                  pathname: '/article/[articleSlug]',
                  query: {
                    articleSlug: item.slug,
                  },
                }}
              >
                <Col className="pb-3 px-2" md={6}>
                  <CardNewHeaderSm newsHeaderSm={item} />
                </Col>
              </Link>
            ))}
          </RowStyled>
          <RowStyled>
            {dbNewsHeaderLg.map((item, idx) => (
              <Link
                key={idx}
                href={{
                  pathname: '/article/[articleSlug]',
                  query: {
                    articleSlug: item.slug,
                  },
                }}
              >
                <Col className="px-2">
                  <CardNewHeaderLg newsHeaderLg={item} />
                </Col>
              </Link>
            ))}
          </RowStyled>
        </Col>
      </RowStyled>
    </>
  );
}
