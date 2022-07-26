import { CardNewItem } from '../components/card-new/card-new';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { getDataNews } from '../lib/data-news';
import { Container, Row, Col } from 'react-bootstrap';
import TopStoriesContainer from '../containers/top-stories-container';
import MixedContainer from '../containers/mixed-container';
import BigHeaderContainer from '../containers/big-header-container';
import TwoColumnContainer from '../containers/two-column-container';
import styled, { ThemeProvider } from 'styled-components';
import { themes } from '../contexts/constants';
import { ThemeContext } from '../contexts/ThemeContext';
export interface CardNewProps {
  dataSlider: CardNewItem[];
  dataNews: {
    categories: CardNewItem[];
  };
}
export const StyledTitleHead = styled.h3`
  bottom: 0px;
  left: 0px;
  font-size: 32px;
  font-family: 'Lato Black';
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;
export const StyledLinkHead = styled.a`
  font-size: 12px;
  font-family: 'Lato Bold';
`;
export const StyledSpanHead = styled.span`
  color: #555770;
  font-size: 16px;
  font-family: 'Lato Regular';
`;
const Index = ({ dataSlider, dataNews }: CardNewProps) => {
  return (
    <ThemeContext.Provider value={themes}>
      <main className="flex-shrink-0">
        <Header />
        <Container className="pt-4 py-4">
          <Row className="px-0 mb-4 mx-0">
            <Col className="px-0">
              <StyledLinkHead href="/">NEWS/</StyledLinkHead>
              <StyledTitleHead>Top stories</StyledTitleHead>
              <StyledSpanHead>
                Always up-to-date to latest telecommuncation news.
              </StyledSpanHead>
            </Col>
          </Row>
          <TopStoriesContainer
            sliderCard={dataSlider.slice(0, 4)}
            newsCardSmall={dataSlider.slice(4, 6)}
            newsCardLarge={dataSlider.slice(6, 7)}
          />
          {dataNews.categories.slice(0, 3).map((item, idx) => {
            let result =
              item.viewType === 'MIXED' ? (
                <MixedContainer key={idx} newsCard={item.articles} />
              ) : item.viewType === 'BIG_HEADER' ? (
                <BigHeaderContainer key={idx} newsCard={item.articles} />
              ) : (
                <TwoColumnContainer key={idx} newsCard={item.articles} />
              );
            return result;
          })}
        </Container>
        <Footer />
      </main>
    </ThemeContext.Provider>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const data = await getDataNews();
  return {
    props: {
      dataSlider: data.topStories.articles,
      dataNews: data,
    },
  };
};
