import React from 'react';
import Image from 'next/image';
import { CardNewItem } from '../components/card-new/vertical -card/card-new';
import { Button, Col } from 'react-bootstrap';
import { SeparatorStyled } from './template-mixed';
import { RowStyled } from './template-top-stories';
import CardFullInfo from '../components/card-new/card-full-info/card-full-info';
import CardNewHorizontalLarge from '../components/card-new/horizontal-card/card-new-horizontal-lg';
import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../utils/theme';
import { TitleStyled } from '../pages';

export const ButtonStyled = styled(Button)`
  color: ${({ theme }) => theme.hoverTheme.darkBlue};
  border: 2px solid ${theme.primaryBlue};
`;

interface CardNewProps {
  News: CardNewItem[];
}

function TemplateBigHeader({ News }: CardNewProps) {
  return (
    <>
      {News.slice(0, 1).map((item, idx) => (
        <div
          key={idx}
          className="d-flex align-items-center justify-content-between mx-2 mt-5"
        >
          <div className="d-flex align-items-center">
            <Image src={item.category.icon} alt="" width={48} height={48} />
            <TitleStyled className="fw-bold ms-4 mb-0">
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
            <Col>
              <CardFullInfo news={item} />
            </Col>
          </Link>
        ))}
      </RowStyled>
      <RowStyled>
        {News.slice(1, 3).map((item, idx) => (
          <Link
            key={idx}
            href={{
              pathname: '/article/[articleSlug]',
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

export default TemplateBigHeader;
