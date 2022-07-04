import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import GlobalNewContainer from '../containers/global-new-container';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import SubHeaderContainer from '../containers/sub-header-container';

export const StyledButton = styled(Button)`
  background-color: #ffffff;
  color: #004fc4;
  font-size: 16px;
  font-family: 'Lato Bold';
  font-style: normal;
  border-radius: 4px;
  display: flex;
  justify-content: center;
`;
const StyledCard = styled.div`
  padding: 46px 108px;
`;
export default function News() {
  const [dataNews, setDataNews] = useState([]);
  const [dataSlider, setDataSiler] = useState([]);
  const [dataNewsLarge, setDataNewsLarge] = useState([]);
  const [dataNewsSmall, setDataNewsSmall] = useState([]);
  const [limit, setLimit] = useState(8);
  const apiNews =
    'https://api.w2project-internal.asia/api/v1/news/by-category-slug/global-news';

  useEffect(() => {
    axios.get(`${apiNews}?limit=${limit}`).then((res) => {
      setDataNews(res.data.data);
      setLimit(res.data.data.length);
    });
  }, [limit]);
  useEffect(() => {
    axios.get(`${apiNews}?limit=${limit}`).then((res) => {
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
      <StyledCard>
        <SubHeaderContainer
          dataNewsLarge={dataNewsLarge}
          dataNewsSmall={dataNewsSmall}
          dataSlider={dataSlider}
        />
        <GlobalNewContainer dataNews={dataNews} setDataNews={setDataNews} />
      </StyledCard>

      <div className="d-flex justify-content-center mb-5">
        <StyledButton disable={limit > 12} onClick={() => setLimit(limit + 4)}>
          Show more articles
        </StyledButton>
      </div>

      <Footer />
    </div>
  );
}
