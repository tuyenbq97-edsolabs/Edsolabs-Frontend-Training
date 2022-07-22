import React from 'react';
import CardNew, { CardNewItem } from '../components/card-new/card-new';
import { StyledImage, StyledSectionContainer } from './mixed-container';
import { Row, Col, Button } from 'react-bootstrap';
import CardNewGlobalLarge from '../components/card-new-global-large/card-new-global-large';
import Link from 'next/link';
import { StyledTitleHead } from '../pages';
interface TwoColumnContainerProps {
  newsCard: CardNewItem[];
}
export default function TwoColumnContainer({
  newsCard,
}: TwoColumnContainerProps) {
  return (
    <StyledSectionContainer>
      {newsCard.slice(0, 1).map((item, idx) => (
        <Row key={idx} className="align-items-center pb-3">
          <Col lg={8}>
            <div className="d-flex align-items-center d-inline-block">
              <StyledImage
                width={46}
                height={36}
                src={item.category.icon}
                alt="icon-global"
              />
              <StyledTitleHead className="ms-4">
                {item.category.name}
              </StyledTitleHead>
            </div>
          </Col>
          <Col className="d-none d-lg-block" lg={4}>
            <div className="d-flex justify-content-end">
              <Button className=" text-primary bg-white border-2">
                Read More
              </Button>
            </div>
          </Col>
        </Row>
      ))}
      <div className="divider"></div>
      <Row>
        {newsCard.slice(0, 2).map((item, idx) => (
          <Link
            key={idx}
            href={{
              pathname: '/article/[articleSlug]',
              query: {
                articleSlug: item.slug,
              },
            }}
          >
            <Col lg={6} className="px-2">
              <CardNewGlobalLarge newsCardGlobalLarge={item} />
            </Col>
          </Link>
        ))}
      </Row>
      <Row>
        {newsCard.slice(2, 6).map((item, idx) => (
          <Link
            key={idx}
            href={{
              pathname: '/article/[articleSlug]',
              query: {
                articleSlug: item.slug,
              },
            }}
          >
            <Col xl={3} lg={6} md={6}>
              <CardNew news={item} />
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
