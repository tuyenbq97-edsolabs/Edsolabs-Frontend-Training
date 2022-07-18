import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import CardNewHorizontalLarge from '../components/card-new/horizontal-card/card-new-horizontal-lg';
import CardNewHorizontalSmall from '../components/card-new/horizontal-card/card-new-horizontal-sm';
import CardNew, {
  CardNewItem,
} from '../components/card-new/vertical -card/card-new';
import { RowStyled } from './header-new-container';

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
  localNews: CardNewItem[];
}

function LocalNewsContainers({ localNews }: CardNewProps) {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between me-2 ms-2 mt-5">
        {localNews.slice(0, 1).map((item, idx) => (
          <div key={idx} className="d-flex align-items-center">
            <Image src={item.category.icon} alt="" width={48} height={48} />
            <h3 className="fw-bold ms-4">{item.category.name}</h3>
          </div>
        ))}
        <Button className="text-primary bg-white border-3 fw-bold d-none d-md-inline">
          Read More
        </Button>
      </div>
      <SeparatorStyled />
      <RowStyled>
        {localNews.slice(0, 1).map((item, idx) => (
          <Link
            key={idx}
            href={{
              pathname: '/[articleSlug]',
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
          {localNews.slice(1, 4).map((item, idx) => (
            <Link
              key={idx}
              href={{
                pathname: '/[articleSlug]',
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
        {localNews.slice(4, 8).map((items, idx) => (
          <Link
            key={idx}
            href={{
              pathname: '/[articleSlug]',
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
      <div className="ms-4 me-4">
        <Button className="text-primary bg-white border-2  fw-bold d-md-none d-inline w-100">
          Read More
        </Button>
      </div>
    </>
  );
}

export default LocalNewsContainers;
