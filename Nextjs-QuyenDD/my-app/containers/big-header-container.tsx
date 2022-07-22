import React from 'react';
import { CardNewItem } from '../components/card-new/card-new';
import { StyledImage, StyledSectionContainer } from './mixed-container';
import { Row, Col, Button } from 'react-bootstrap';
import CardNewGlobalLarge from '../components/card-new-global-large/card-new-global-large';
import CardNewGlobalSmall from '../components/card-new-global-small/card-new-global-small';
import Link from 'next/link';
import { StyledTitleHead } from '../pages';
import { ThemeContext } from 'styled-components';
interface BigHeaderContainerProps {
  newsCard: CardNewItem[];
}
export default function BigHeaderContainer({
  newsCard,
}: BigHeaderContainerProps) {
  return (
    <StyledSectionContainer>
      {newsCard.slice(0, 1).map((item, idx) => (
        <Row key={idx} className="align-items-center pb-3">
          <Col lg={8}>
            <div className="d-flex align-items-center d-inline-block">
              <StyledImage
                width={40}
                height={40}
                src={item.category.icon}
                alt="icon-global"
              />
              <StyledTitleHead className="ms-4">
                {item.category.name}
              </StyledTitleHead>
            </div>
          </Col>
          <Col className="d-none d-lg-block" lg={4}>
            <Link
              href={{
                pathname: '/category/[categorySlug]',
                query: {
                  categorySlug: item.category.slug,
                },
              }}
            >
              <div className="d-flex justify-content-end">
                <Button className="text-primary bg-white border-2">
                  <a className=" text-decoration-none">Read More</a>
                </Button>
              </div>
            </Link>
          </Col>
        </Row>
      ))}
      <div className="divider"></div>
      <Row>
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
            <Col>
              <CardNewGlobalLarge newsCardGlobalLarge={item} />
            </Col>
          </Link>
        ))}
      </Row>
      <Row className="flex-row">
        {newsCard.slice(1, 3).map((item, idx) => (
          <Link
            key={idx}
            href={{
              pathname: '/article/[articleSlug]',
              query: {
                articleSlug: item.slug,
              },
            }}
          >
            <Col lg={6}>
              <CardNewGlobalSmall newsCardGlobalSmall={item} />
            </Col>
          </Link>
        ))}
      </Row>
      {newsCard.slice(0, 1).map((item, idx) => (
        <Row key={idx} className="d-lg-none d-flex">
          <Col lg={8}>
            <div className="d-flex align-items-center d-inline-block">
              <StyledImage
                width={40}
                height={40}
                src={item.category.icon}
                alt="icon-global"
              />
              <h3 className="ms-4">{item.category.name}</h3>
            </div>
          </Col>
        </Row>
      ))}
      <Row className="d-lg-none d-flex">
        {newsCard.slice(0, 1).map((item, idx) => (
          <Link
            key={idx}
            href={{
              pathname: '/category/[categorySlug]',
              query: {
                categorySlug: item.category.slug,
              },
            }}
          >
            <Col>
              <Button className="d-flex w-100 justify-content-center text-primary bg-white border-2">
                Read More
              </Button>
            </Col>
          </Link>
        ))}
      </Row>
    </StyledSectionContainer>
  );
}
