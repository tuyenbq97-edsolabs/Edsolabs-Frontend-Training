import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { CardNewItem } from '../components/card-new/vertical -card/card-new';
import BlogsTipsTricksContainer from '../containers/blogs-tips-tricks-container';
import FooterContainer from '../containers/footer-container';
import GlobalNewsContainer from '../containers/global-news-container';
import HeaderContainer from '../containers/header-container';
import HeaderNewContainer, {
  LinkStyled,
  TitleHeaderStyled,
} from '../containers/header-new-container';
import LocalNewsContainers from '../containers/local-news-containers';
import SubFooterContainer from '../containers/sub-footer-container';

export interface CardNewProps {
  dataSlider: CardNewItem[];
  dataLocal: CardNewItem[];
  dataGlobal: CardNewItem[];
  dataBlogsTipsTricks: CardNewItem[];
}

function index({
  dataSlider,
  dataLocal,
  dataGlobal,
  dataBlogsTipsTricks,
}: CardNewProps) {
  return (
    <div>
      <HeaderContainer />
      <Container className="p-0">
        <div className="ps-2">
          <LinkStyled href="/">NEWS /</LinkStyled>
          <h3 className="fw-bold">Top stories</h3>
          <TitleHeaderStyled>
            Always up-to-date to latest telecommuncation news.
          </TitleHeaderStyled>
        </div>
        <HeaderNewContainer
          dbNewsHeaderSm={dataSlider.slice(4, 6)}
          slider={dataSlider.slice(0, 4)}
          dbNewsHeaderLg={dataSlider.slice(6, 7)}
        />
        <LocalNewsContainers localNews={dataLocal} />
        <GlobalNewsContainer globalNews={dataGlobal} />
        <BlogsTipsTricksContainer BlogTipTrick={dataBlogsTipsTricks} />
      </Container>
      <FooterContainer />
      <SubFooterContainer />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const resGlobalNews = await fetch(
    `https://api.w2project-internal.asia/api/v1/news/by-category-slug/global-news`
  );
  const resLocalNews = await fetch(
    `https://api.w2project-internal.asia/api/v1/news/by-category-slug/local-news`
  );
  const resTipsTricks = await fetch(
    `https://api.w2project-internal.asia/api/v1/news/by-category-slug/blogs-tips-and-tricks`
  );

  const dataGlobal = await resGlobalNews.json();
  const dataLocal = await resLocalNews.json();
  const dataTipsTricks = await resTipsTricks.json();

  // Pass data to the page via props
  return {
    props: {
      dataSlider: dataGlobal.data.slice(0, 7),
      dataGlobal: dataGlobal.data,
      dataLocal: dataLocal.data,
      dataBlogsTipsTricks: dataTipsTricks.data,
    },
  };
}

export default index;
