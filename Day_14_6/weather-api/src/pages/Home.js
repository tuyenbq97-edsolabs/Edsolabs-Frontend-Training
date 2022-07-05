import React from 'react';
import SearchComponent from '../components/SearchComponent';
import ListWeather from '../container/ListWeather';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function Home() {
  const [listWeather, setListWeather] = useState([]);
  const [listThreeDays, setListThreeDays] = useState([]);

  return (
    <Container className="pb-5">
      <SearchComponent
        setListThreeDays={setListThreeDays}
        setListWeather={setListWeather}
      />
      <ListWeather
        listWeather={listWeather}
        setListWeather={setListWeather}
        list3Days={listThreeDays}
        setList3Days={setListThreeDays}
      />
    </Container>
  );
}

export default Home;
