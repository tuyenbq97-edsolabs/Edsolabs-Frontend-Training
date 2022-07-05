import { useEffect, useState } from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import GlobalNewContainer from '../containers/global-new-container';
import { Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import SubHeaderContainer from '../containers/sub-header-container';
import { CardNewItem } from '../components/card-new/card-new';
import fetchGlobalNews from '../services/fetchGlobalNews';

export const StyledButton = styled(Button)`
  background-color: #ffffff;
  color: #004fc4;
  font-size: 16px;
  font-family: 'Lato Bold';
  border-radius: 4px;
  display: flex;
  justify-content: center;
  @media (max-width: 375.9px) {
    padding: 12px 90px;
  }
`;

export default function News() {
  const [dataNews, setDataNews] = useState<CardNewItem[]>([]);
  const [dataSlider, setDataSiler] = useState<CardNewItem[]>([]);
  const [dataNewsLarge, setDataNewsLarge] = useState<CardNewItem[]>([]);
  const [dataNewsSmall, setDataNewsSmall] = useState<CardNewItem[]>([]);
  const [limit, setLimit] = useState(8);
  useEffect(() => {
    fetchGlobalNews.get(`?limit=${limit}`).then((res) => {
      setDataNews(res.data.data);
      setLimit(res.data.data.length);
    });
  }, [limit]);

  useEffect(() => {
    fetchGlobalNews.get(`?limit=${limit}`).then((res) => {
      setDataNews(res.data.data);
      setDataSiler(res.data.data.slice(0, 4));
      setDataNewsSmall(res.data.data.slice(4, 6));
      setDataNewsLarge(res.data.data.slice(7, 8));
      setLimit(res.data.data.length);
    });
  }, []);
  return (
    <div>
      <Header />
      <Container fluid>
        <SubHeaderContainer
          dataNewsLarge={dataNewsLarge}
          dataNewsSmall={dataNewsSmall}
          dataSlider={dataSlider}
        />
        <GlobalNewContainer dataNews={dataNews} setDataNews={setDataNews} />
      </Container>
      <div className="d-flex justify-content-center mb-5">
        <StyledButton disable={limit > 12} onClick={() => setLimit(limit + 4)}>
          Show more articles
        </StyledButton>
      </div>

      <Footer />
    </div>
  );
}
