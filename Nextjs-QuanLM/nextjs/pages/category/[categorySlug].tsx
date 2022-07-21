/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import { CardNewProps } from '..';
import CardNew from '../../components/card-new/vertical -card/card-new';
import FooterContainer from '../../containers/footer-container';
import HeaderContainer from '../../containers/header-container';
import HeaderNewContainer, {
  LinkStyled,
  RowStyled,
  TitleHeaderStyled,
} from '../../containers/template-top-stories';
import { ColStyled } from '../../containers/template-mixed';
import SubFooterContainer from '../../containers/sub-footer-container';
import useSWRInfinite from 'swr/infinite';
import { useRouter } from 'next/router';

function CategorySlug() {
  const fetcher = (url: RequestInfo | URL) =>
    fetch(url).then((res) => res.json());
  const router = useRouter();
  const {
    query: { categorySlug },
  } = router;
  const { data, size, setSize } = useSWRInfinite((index, previousPageData) => {
    const PER_SIZE = 4;
    const INIT_POST = 7;
    if (previousPageData && !previousPageData.length)
      return `https://api.w2project-internal.asia/api/v1/news/by-category-slug/${categorySlug}?limit=${PER_SIZE}&offset=${
        PER_SIZE * index + INIT_POST
      }`;
    else
      return `https://api.w2project-internal.asia/api/v1/news/by-category-slug/${categorySlug}?limit=${
        PER_SIZE + INIT_POST
      }&offset=${index}`;
  }, fetcher);
  const dbNews = data?.map((data) => data.data);
  const news = dbNews ? [].concat(...dbNews) : [];
  const total = data?.slice(0, 1)?.map((data) => data.total);
  return (
    <div>
      <HeaderContainer />
      <Container>
        <div className="ps-2">
          <LinkStyled href="/">NEWS /</LinkStyled>
          <h3 className="fw-bold">
            {news.slice(0, 1).map((item) => {
              return item['category']['name'];
            })}
          </h3>
          <TitleHeaderStyled>
            Always up-to-date to latest telecommuncation news.
          </TitleHeaderStyled>
        </div>
        <HeaderNewContainer
          dbNewsHeaderSm={news.slice(4, 6)}
          slider={news.slice(4, 8)}
          dbNewsHeaderLg={news.slice(6, 7)}
        />
        <RowStyled>
          {news.slice(7).map((item, idx) => (
            <Link
              key={idx}
              href={{
                pathname: '/[categorySlug]',
                query: {
                  categorySlug: item['slug'],
                },
              }}
            >
              <ColStyled md={3}>
                <CardNew news={item} />
              </ColStyled>
            </Link>
          ))}
        </RowStyled>
        <div className="d-flex justify-content-center mb-4">
          <Button
            className="bg-white text-primary border-2 fw-bold px-5"
            disabled={news.length >= Number(total)}
            onClick={() => setSize(size + 1)}
          >
            Show more articles
          </Button>
        </div>
      </Container>
      <FooterContainer />
      <SubFooterContainer />
    </div>
  );
}

export default CategorySlug;
