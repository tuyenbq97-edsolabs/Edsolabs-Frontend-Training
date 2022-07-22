import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { ImageStyled } from '../components/card-new-header/card-new-header-lg/card-new-header-lg';
import CardNewHorizontalLarge from '../components/card-new/horizontal-card/card-new-horizontal-lg';
import CardNewHorizontalSmall from '../components/card-new/horizontal-card/card-new-horizontal-sm';
import CardNew, {
  CardNewItem,
} from '../components/card-new/vertical -card/card-new';
import { TitleStyled } from '../pages';
import { ButtonStyled } from './template-big-header';
import { RowStyled } from './template-top-stories';

export const SeparatorStyled = styled.hr`
  margin: 16px 8px 40px 8px;
  border-top: 2px solid #e3e4eb;
`;

export const ColStyled = styled(Col)`
  @media only screen and (max-width: 992px) {
    width: 50%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

interface CardNewProps {
  News: CardNewItem[];
}

function TemplateMixed({ News }: CardNewProps) {
  return (
    <>
      {News.slice(0, 1).map((item, idx) => (
        <div
          key={idx}
          className="d-flex align-items-center justify-content-between mx-2 mt-5"
        >
          <div className="d-flex align-items-center">
            <Image src={item.category.icon} alt="" width={48} height={48} />
            <TitleStyled className="fw-bold ms-4">
              {item.category.name}
            </TitleStyled>
          </div>
          <Link
            href={{
              pathname: '/category/[categorySlug]',
              query: {
                categorySlug: item.category.slug,
              },
            }}
          >
            <ButtonStyled className="fw-bold bg-white d-none d-md-inline">
              <a className="text-decoration-none"> Read More</a>
            </ButtonStyled>
          </Link>
        </div>
      ))}
      <SeparatorStyled />
      <RowStyled>
        {News.slice(0, 1).map((item, idx) => (
          <Link
            key={idx}
            href={{
              pathname: '/article/[articleSlug]',
              query: {
                articleSlug: item.slug,
              },
            }}
          >
            <Col md={8} className="pe-2 ps-2">
              <CardNewHorizontalLarge news={item} />
            </Col>
          </Link>
        ))}
        <Col md={4}>
          {News.slice(1, 4).map((item, idx) => (
            <Link
              key={idx}
              href={{
                pathname: '/article/[articleSlug]',
                query: {
                  articleSlug: item.slug,
                },
              }}
            >
              <Row className="mb-3">
                <CardNewHorizontalSmall news={item} />
              </Row>
            </Link>
          ))}
        </Col>
      </RowStyled>
      <RowStyled>
        {News.slice(4, 8).map((items, idx) => (
          <Link
            key={idx}
            href={{
              pathname: '/article/[articleSlug]',
              query: {
                articleSlug: items.slug,
              },
            }}
          >
            <ColStyled key={idx} lg={3}>
              <CardNew news={items} />
            </ColStyled>
          </Link>
        ))}
      </RowStyled>
      {News.slice(0, 1).map((item, idx) => (
        <div key={idx} className="ms-4 me-4">
          <Link
            href={{
              pathname: '/category/[categorySlug]',
              query: {
                categorySlug: item.category.slug,
              },
            }}
          >
            <Button className="text-primary bg-white border-2  fw-bold d-md-none d-inline w-100">
              <a className="text-decoration-none"> Read More</a>
            </Button>
          </Link>
        </div>
      ))}
    </>
  );
}

export default TemplateMixed;
