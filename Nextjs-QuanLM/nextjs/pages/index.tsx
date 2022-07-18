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
          dbNewsHeaderSm={dataSlider.slice(2, 4)}
          slider={dataSlider.slice(3, 6)}
          dbNewsHeaderLg={dataSlider.slice(1, 2)}
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

  const resData = await fetch(
    `https://api.w2project-internal.asia/api/v1/news/home`
  );
  const data = await resData.json();

  // Pass data to the page via props
  return {
    props: {
      dataSlider: data.topStories.articles,
      dataGlobal: data.categories.find(
        (element: { name: string }) => element.name === 'Global news'
      ).articles,
      dataLocal: data.categories.find(
        (element: { name: string }) => element.name === 'Local news'
      ).articles,
      dataBlogsTipsTricks: data.categories.find(
        (element: { name: string }) => element.name === 'Blogs, tips & tricks'
      ).articles,
      data: data,
    },
  };
}

export default index;
