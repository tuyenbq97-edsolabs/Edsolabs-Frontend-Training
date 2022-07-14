/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import { CardNewProps } from '.';
import CardNew from '../components/card-new/vertical -card/card-new';
import FooterContainer from '../containers/footer-container';
import HeaderContainer from '../containers/header-container';
import HeaderNewContainer, {
  LinkStyled,
  RowStyled,
  TitleHeaderStyled,
} from '../containers/header-new-container';
import { ColStyled } from '../containers/local-news-containers';
import SubFooterContainer from '../containers/sub-footer-container';

function globalNews({ dataGlobal, dataSlider }: CardNewProps) {
  const [dataNews, setDataNews] = useState(dataGlobal);
  const [limit, setLimit] = useState(11);
  useEffect(() => {
    axios
      .get(
        `https://api.w2project-internal.asia/api/v1/news/by-category-slug/global-news?limit=${limit}`
      )
      .then((res) => {
        setDataNews(res.data.data);
        setLimit(res.data.data.length);
      });
  }, [limit]);
  return (
    <div>
      <HeaderContainer />
      <Container>
        <div className="ps-2">
          <LinkStyled href="/">NEWS /</LinkStyled>
          <h3 className="fw-bold">Global News</h3>
          <TitleHeaderStyled>
            Always up-to-date to latest telecommuncation news.
          </TitleHeaderStyled>
        </div>
        <HeaderNewContainer
          dbNewsHeaderSm={dataSlider.slice(4, 6)}
          slider={dataSlider.slice(0, 4)}
          dbNewsHeaderLg={dataSlider.slice(6, 7)}
        />
        <RowStyled>
          {dataNews.slice(7).map((item, idx) => (
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
        <div className="d-flex justify-content-center mb-4">
          <Button
            className="bg-white text-primary border-2 fw-bold px-5"
            disabled={limit >= 12}
            onClick={() => setLimit(limit + 4)}
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

export async function getServerSideProps() {
  // Fetch data from external API
  const resGlobalNews = await fetch(
    `https://api.w2project-internal.asia/api/v1/news/by-category-slug/global-news?limit=11`
  );

  const dataGlobal = await resGlobalNews.json();

  // Pass data to the page via props
  return {
    props: {
      dataSlider: dataGlobal.data.slice(0, 7),
      dataGlobal: dataGlobal.data,
      data: dataGlobal,
    },
  };
}

export default globalNews;
