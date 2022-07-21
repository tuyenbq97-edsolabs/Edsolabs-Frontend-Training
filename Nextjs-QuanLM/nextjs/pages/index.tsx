import React from 'react';
import { Container } from 'react-bootstrap';
import { CardNewItem } from '../components/card-new/vertical -card/card-new';
import FooterContainer from '../containers/footer-container';
import HeaderContainer from '../containers/header-container';
import {
  LinkStyled,
  TitleHeaderStyled,
} from '../containers/template-top-stories';
import SubFooterContainer from '../containers/sub-footer-container';
import TemplateBigHeader from '../containers/template-big-header';
import TemplateMixed from '../containers/template-mixed';
import TemplateTwoColumn from '../containers/template-two-column';
import TemplateTopStories from '../containers/template-top-stories';
import getConfig from 'next/config';

export interface CardNewProps {
  dataSlider: CardNewItem[];
  data: {
    categories: CardNewItem[];
    topstory: CardNewItem[];
  };
}

function index({ dataSlider, data }: CardNewProps) {
  // Only holds serverRuntimeConfig and publicRuntimeConfig
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
  // Will only be available on the server-side
  console.log(serverRuntimeConfig.mySecret);
  // Will be available on both server-side and client-side
  console.log(publicRuntimeConfig.staticFolder);

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
        <TemplateTopStories
          dbNewsHeaderSm={dataSlider.slice(2, 4)}
          slider={dataSlider.slice(3, 6)}
          dbNewsHeaderLg={dataSlider.slice(1, 2)}
        />
        {data.categories.slice(0, 3).map((item, idx) => {
          if (item.viewType === 'MIXED')
            return <TemplateMixed key={idx} News={item.articles} />;
          else if (item.viewType === 'BIG_HEADER')
            return <TemplateBigHeader key={idx} News={item.articles} />;
          else if (item.viewType === 'TWO_COLUMN')
            return <TemplateTwoColumn key={idx} News={item.articles} />;
        })}
        {/* {data.categories.slice(3).map((item) => {
          if (item.viewType === 'MIXED')
            return <LocalNewsContainers localNews={item.articles} />;
          else if (item.viewType === 'BIG_HEADER')
            return <GlobalNewsContainer globalNews={item.articles} />;
          else if (item.viewType === 'TWO_COLUMN')
            return <BlogsTipsTricksContainer BlogTipTrick={item.articles} />;
        })} */}
      </Container>
      <FooterContainer />
      <SubFooterContainer />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API

  const resData = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/home`);
  const data = await resData.json();

  // Pass data to the page via props
  return {
    props: {
      dataSlider: data.topStories.articles,
      data: data,
    },
  };
}

export default index;
