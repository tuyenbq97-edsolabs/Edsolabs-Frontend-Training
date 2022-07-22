import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CardNew, { CardNewItem } from '../../components/card-new/card-new';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Link from 'next/link';
import TopStoriesContainer from '../../containers/top-stories-container';
import useSWRInfinite from 'swr/infinite';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { StyledTitleHead } from '..';

const StyledButton = styled(Button)`
  font-family: 'Lato Bold';
  font-size: 16px;
  .btn-primary:disabled {
    background-color: #fff;
    color: #ccc;
  }
`;
export default function CategorySlug() {
  const router = useRouter();
  const { query } = router;
  const { categorySlug } = query;
  const aipGlobalNews =
    process.env.NEXT_PUBLIC_API_GLOBAL_NEWS + '/' + categorySlug;
  const defaultLimit = 4;
  const initialPost = 7;
  const fetcher = (url: RequestInfo | URL) =>
    fetch(url).then((res) => res.json());
  const { data, size, setSize } = useSWRInfinite((index, previousPageData) => {
    let result =
      previousPageData && !previousPageData.length
        ? `${aipGlobalNews}?limit=${defaultLimit}&offset=${
            defaultLimit * index + initialPost
          }`
        : `${aipGlobalNews}?limit=${
            defaultLimit + initialPost
          }&offset=${index}`;

    return result;
  }, fetcher);
  const dataGlobalNews = data?.map((res) => res.data);
  const dataNews = dataGlobalNews ? [].concat(...dataGlobalNews) : [];
  return (
    <main className="flex-shrink-0">
      <Header />
      <Container className="pt-4 py-4">
        <Row className="mb-4">
          <Link href="/">NEWS/ GLOBAL NEWS/</Link>
          <StyledTitleHead>Global news</StyledTitleHead>
          <span>Always up-to-date to latest telecommuncation news.</span>
        </Row>

        <TopStoriesContainer
          sliderCard={dataNews.slice(0, 4)}
          newsCardSmall={dataNews.slice(4, 6)}
          newsCardLarge={dataNews.slice(6, 7)}
        />

        <Row className="mb-2 mb-lg-0">
          {dataNews.slice(7).map((item, idx) => (
            <Link
              key={idx}
              href={{
                pathname: '/[categorySlug]',
                query: {
                  categorySlug: item['slug'],
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
        <div className="d-flex justify-content-center mb-4">
          <StyledButton
            className="bg-white text-primary border-2 fw-bold px-5"
            disabled={dataNews.length >= 12}
            onClick={() => setSize(size + 1)}
          >
            Show more articles
          </StyledButton>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
