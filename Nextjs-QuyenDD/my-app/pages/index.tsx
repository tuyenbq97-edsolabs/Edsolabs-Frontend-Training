import { CardNewItem } from '../components/card-new/card-new';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { getDataNews } from '../lib/data-news';
import { Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import TopStoriesContainer from '../containers/top-stories-container';
import MixedContainer from '../containers/mixed-container';
import BigHeaderContainer from '../containers/big-header-container';
import TwoColumnContainer from '../containers/two-column-container';
import styled from 'styled-components';

export interface CardNewProps {
  dataSlider: CardNewItem[];
  dataNews: {
    categories: CardNewItem[];
  };
}
export const StyledTitleHead = styled.h3`
  font-size: 32px;
  font-family: 'Lato Black';
`;
const Index = ({ dataSlider, dataNews }: CardNewProps) => {
  return (
    <main className="flex-shrink-0">
      <Header />
      <Container className="pt-4 py-4">
        <Row className="mb-4">
          <Link href="/">NEWS/</Link>
          <StyledTitleHead>Top stories</StyledTitleHead>
          <span>Always up-to-date to latest telecommuncation news.</span>
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
