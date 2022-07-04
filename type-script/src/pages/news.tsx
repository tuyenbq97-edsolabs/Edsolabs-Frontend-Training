import React from 'react';
import styled from 'styled-components';
import FooterContainer from '../containers/footer-container';
import GlobalNewContainer from '../containers/global-new-container';
import HeaderContainer from '../containers/header-container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderNewContainer from '../containers/header-new-container';
import SubFooterContainer from '../containers/sub-footer-container';
import { Button } from 'react-bootstrap';

const MainStyled = styled.div`
  max-width: 100vw;
  min-height: 100vh;
`;

export default function News() {
  const [dbNews, setDbNews] = useState([]);
  const [slider, setSlider] = useState([]);
  const [dbNewsHeaderSm, setDbNewsHeaderSm] = useState([]);
  const [dbNewsHeaderLg, setDbNewsHeaderLg] = useState([]);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    axios
      .get(
        `https://api.w2project-internal.asia/api/v1/news/by-category-slug/global-news?limit=${limit}`
      )
      .then((res) => {
        setDbNews(res.data.data);
        setSlider(res.data.data.slice(0, 4));
        setDbNewsHeaderSm(res.data.data.slice(4, 6));
        setDbNewsHeaderLg(res.data.data.slice(7, 8));
        setLimit(res.data.data.length);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.w2project-internal.asia/api/v1/news/by-category-slug/global-news?limit=${limit}`
      )
      .then((res) => {
        setDbNews(res.data.data);
        setLimit(res.data.data.length);
      });
  }, [limit]);

  return (
    <MainStyled>
      <HeaderContainer />
      <HeaderNewContainer
        dbNewsHeaderSm={dbNewsHeaderSm}
        dbNewsHeaderLg={dbNewsHeaderLg}
        slider={slider}
      />
      <GlobalNewContainer dbNews={dbNews} setDbNews={setDbNews} />
      <div className="d-flex justify-content-center mb-4">
        <Button
          className="bg-white text-primary border-2 fw-bold px-5"
          disabled={limit >= 12}
          onClick={() => setLimit(limit + 4)}
        >
          Show more articles
        </Button>
      </div>
      <FooterContainer />
      <SubFooterContainer />
    </MainStyled>
  );
}
