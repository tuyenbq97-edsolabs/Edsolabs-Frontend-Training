import React from 'react';
import { Button, Col } from 'react-bootstrap';
import CardNew, {
  CardNewItem,
} from '../components/card-new/vertical -card/card-new';
import Image from 'next/image';
import { ColStyled, SeparatorStyled } from './local-news-containers';
import { RowStyled } from './header-new-container';
import CardFullInfo from '../components/card-new/card-full-info/card-full-info';
import Link from 'next/link';

interface CardNewProps {
  BlogTipTrick: CardNewItem[];
}

function BlogsTipsTricksContainer({ BlogTipTrick }: CardNewProps) {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between me-2 ms-2 mt-5">
        {BlogTipTrick.slice(0, 1).map((item, idx) => (
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
        {BlogTipTrick.slice(0, 2).map((item, idx) => (
          <Link
            key={idx}
            href={{
              pathname: '/[articleSlug]',
              query: {
                articleSlug: item.slug,
              },
            }}
          >
            <Col lg={6}>
              <CardFullInfo customheight="518px" news={item} />
            </Col>
          </Link>
        ))}
      </RowStyled>
      <RowStyled>
        {BlogTipTrick.slice(2, 6).map((item, idx) => (
          <Link
            key={idx}
            href={{
              pathname: '/[articleSlug]',
              query: {
                articleSlug: item.slug,
              },
            }}
          >
            <ColStyled md={3}>
              <CardNew news={item} />
            </ColStyled>
          </Link>
        ))}
      </RowStyled>
      <div className="ms-4 me-4">
        <Button className="text-primary bg-white border-2 fw-bold d-md-none d-inline w-100">
          Read More
        </Button>
      </div>
    </>
  );
}

export default BlogsTipsTricksContainer;
