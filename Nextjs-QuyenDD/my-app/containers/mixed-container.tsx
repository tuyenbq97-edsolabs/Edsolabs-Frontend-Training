import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import Image from 'next/image';
import styled from 'styled-components';
import CardNew, { CardNewItem } from '../components/card-new/card-new';
import CardNewLargeY from '../components/card-new-large-y/card-new-large-y';
import CardNewSmallY from '../components/card-new-small-y/card-new-small-y';
import Link from 'next/link';
import { StyledTitleHead } from '../pages';
export interface MixedContainerProps {
  newsCard: CardNewItem[];
}
export const StyledSectionContainer = styled.section`
  margin-bottom: 64px;
  .divider {
    border-bottom: 1px solid rgb(227, 228, 235);
    margin-bottom: 40px;
  }
`;
export const StyledImage = styled(Image)`
  object-fit: cover;
`;
export default function MixedContainer({ newsCard }: MixedContainerProps) {
  return (
    <StyledSectionContainer>
      {newsCard.slice(0, 1).map((item, idx) => (
        <Row key={idx} className="align-items-center pb-3">
          <Col lg={8}>
            <div className="d-flex align-items-center d-inline-block">
              <StyledImage
                width={22}
                height={42}
                src={item.category.icon}
                alt="icon-local"
              />
              <StyledTitleHead className="ms-4">
                {item.category.name}
              </StyledTitleHead>
            </div>
          </Col>
          <Col className="d-none d-lg-block " lg={4}>
            <div className="d-flex justify-content-end">
              <Button className="text-primary bg-white border-2">
                Read More
              </Button>
            </div>
          </Col>
        </Row>
      ))}

      <div className="divider"></div>
      <Row className="mb-4">
        {newsCard.slice(0, 1).map((item, idx) => (
          <Link
            key={idx}
            href={{
              pathname: '/article/[articleSlug]',
              query: {
                articleSlug: item.slug,
              },
            }}
          >
            <Col xl={9} lg={7}>
              <CardNewLargeY newsCardLargeY={item} />
            </Col>
          </Link>
        ))}

        <Col className="d-none d-lg-block" xl={3} lg={5}>
          {newsCard.slice(1, 4).map((item, idx) => (
            <Link
              key={idx}
              href={{
                pathname: '/article/[articleSlug]',
                query: {
                  articleSlug: item.slug,
                },
              }}
            >
              <CardNewSmallY newsCardSmallY={item} />
            </Link>
          ))}
        </Col>
      </Row>
      <Row className="justify-content-center mb-2 mb-lg-0">
        {newsCard.slice(4, 8).map((item, idx) => (
          <Link
            key={idx}
            href={{
              pathname: '/article/[articleSlug]',
              query: {
                articleSlug: item.slug,
              },
            }}
          >
            <Col xl={3} lg={6} sm={6}>
              <div className="d-flex mb-3">
                <CardNew news={item} />
              </div>
            </Col>
          </Link>
        ))}
      </Row>
      <Row className="d-flex d-lg-none">
        {newsCard.slice(1, 4).map((item, idx) => (
          <Link
            key={idx}
            href={{
              pathname: '/article/[articleSlug]',
              query: {
                articleSlug: item.slug,
              },
            }}
          >
            <Col xl={3} lg={5}>
              <CardNewSmallY newsCardSmallY={item} />
            </Col>
          </Link>
        ))}
      </Row>
      <Row className="d-lg-none d-flex">
        <Col>
          <Button className="d-flex w-100 justify-content-center text-primary bg-white border-2">
            Read More
          </Button>
        </Col>
      </Row>
    </StyledSectionContainer>
  );
}
