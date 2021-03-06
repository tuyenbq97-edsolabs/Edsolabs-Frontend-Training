import React from 'react';
import WeatherComponent from '../components/WeatherComponent';
import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

function ListWeather({ listWeather, setListWeather, list3Days, setList3Days }) {
  useEffect(() => {
    return () => {
      axios
        .get(
          `${process.env.REACT_APP_BASE_URL}?key=${process.env.REACT_APP_KEY}&q=Vietnam&days=3`
        )
        .then((res) => {
          setListWeather(res.data);
          setList3Days(res.data?.forecast?.forecastday);
        });
    };
  }, []);

  return (
    <div className="container">
      {typeof !listWeather?.forecast ? (
        <Row>
          {list3Days != null &&
            list3Days.map((info, index) => (
              <Col key={index} md={4} className="mb-3">
                <WeatherComponent info={info} listWeather={listWeather} />
              </Col>
            ))}
        </Row>
      ) : (
        ''
      )}
    </div>
  );
}

export default ListWeather;
