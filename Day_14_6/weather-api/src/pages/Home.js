import React from 'react';
import SearchComponent from '../components/SearchComponent';
import ListWeather from '../container/ListWeather';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function Home() {
  const [listWeather, setListWeather] = useState([]);
  const [list3Days, setList3Days] = useState([]);

  return (
    <Container className="pb-5">
      <SearchComponent
        setList3Days={setList3Days}
        setListWeather={setListWeather}
      />
      <ListWeather
        listWeather={listWeather}
        setListWeather={setListWeather}
        list3Days={list3Days}
        setList3Days={setList3Days}
      />
    </Container>
  );
}

export default Home;
