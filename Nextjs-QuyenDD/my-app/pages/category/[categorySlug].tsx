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

export default function CategorySlug() {
  const aipGlobalNews = process.env.NEXT_PUBLIC_API_GLOBAL_NEWS;
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
  const issues = dataGlobalNews ? [].concat(...dataGlobalNews) : [];
  return (
    <main className="flex-shrink-0">
      <Header />
      <Container className="pt-4 py-4">
        <Row className="mb-4">
          <Link href="/">NEWS/</Link>
          <StyledTitleHead>Global news</StyledTitleHead>
          <span>Always up-to-date to latest telecommuncation news.</span>
        </Row>

        <TopStoriesContainer
          sliderCard={issues.slice(0, 4)}
          newsCardSmall={issues.slice(4, 6)}
          newsCardLarge={issues.slice(6, 7)}
        />

        <Row className="mb-2 mb-lg-0">
          {issues.slice(7).map((item, idx) => (
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
          <Button
            className="bg-white text-primary border-2 fw-bold px-5"
            disabled={issues.length >= 12}
            onClick={() => setSize(size + 1)}
          >
            Show more articles
          </Button>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
