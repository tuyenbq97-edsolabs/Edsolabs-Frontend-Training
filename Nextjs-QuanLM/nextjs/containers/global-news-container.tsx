import React from 'react';
import Image from 'next/image';
import { CardNewItem } from '../components/card-new/vertical -card/card-new';
import { Button, Col } from 'react-bootstrap';
import { SeparatorStyled } from './local-news-containers';
import { RowStyled } from './header-new-container';
import CardFullInfo from '../components/card-new/card-full-info/card-full-info';
import CardNewHorizontalLarge from '../components/card-new/horizontal-card/card-new-horizontal-lg';
import Link from 'next/link';
import styled from 'styled-components';

const ImageStyled = styled(Image)`
  border-radius: 4px;
`;

interface CardNewProps {
  globalNews: CardNewItem[];
}

function GlobalNewsContainer({ globalNews }: CardNewProps) {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between me-2 ms-2 mt-5">
        {globalNews.slice(0, 1).map((item, idx) => (
          <div key={idx} className="d-flex align-items-center">
            <ImageStyled
              src={item.category.icon}
              alt=""
              width={48}
              height={48}
            />
            <h3 className="fw-bold ms-4">{item.category.name}</h3>
          </div>
        ))}
        <Button className="text-primary bg-white border-3 fw-bold">
          <Link href="/globalNews">
            <a className="text-decoration-none"> Read More</a>
          </Link>
        </Button>
      </div>
      <SeparatorStyled />
      <RowStyled>
        {globalNews.slice(0, 1).map((item, idx) => (
          <Link
            key={idx}
            href={{
              pathname: '/[articleSlug]',
              query: {
                articleSlug: item.slug,
              },
            }}
          >
            <Col>
              <CardFullInfo news={item} />
            </Col>
          </Link>
        ))}
      </RowStyled>
      <RowStyled>
        {globalNews.slice(1, 3).map((item, idx) => (
          <Link
            key={idx}
            href={{
              pathname: '/[articleSlug]',
              query: {
                articleSlug: item.slug,
              },
            }}
          >
            <Col key={idx} md={6}>
              <CardNewHorizontalLarge customheight="200px" news={item} />
            </Col>
          </Link>
        ))}
      </RowStyled>
    </>
  );
}

export default GlobalNewsContainer;
