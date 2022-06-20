import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Search from '../components/Search';
import axios from 'axios';
import WheatherCurrent from '../components/WheatherCurrent';
import WheatherNextFiveDays from '../components/WheatherNextThreeDays';
import { Link } from 'react-router-dom';
export default function Home() {
  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
  const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

  const [wheatherData, setWheatherData] = useState([{}]);
  const [city, setCity] = useState('');
  const [data, setData] = useState([]);
  const getWheather = (event) => {
    if (event.key === 'Enter') {
      axios
        .get(
          `${REACT_APP_BASE_URL}?key=${REACT_APP_API_KEY}&q=${city}&days=3&aqi=no&alerts=no`
        )
        .then((res) => {
          setWheatherData(res.data);
          setData(res.data?.forecast?.forecastday);
        })
        .catch((err) => console.log('err', err));
    }
  };
  return (
    <>
      <Container className="d-flex justify-content-center flex-column">
        <Search setCity={setCity} city={city} getWheather={getWheather} />

        {(typeof wheatherData.location === 'undefined') &
        (typeof wheatherData.current === 'undefined') ? (
          <h3 className="text-center mt-3">Welcome to wheather app !!! </h3>
        ) : (
          <>
            <h3 className="mt-3 text-center">Current Wheather</h3>
            <WheatherCurrent wheatherData={wheatherData} />

            <WheatherNextFiveDays wheatherData={wheatherData} data={data} />
          </>
        )}
      </Container>
      <Link to="/"></Link>
    </>
  );
}
