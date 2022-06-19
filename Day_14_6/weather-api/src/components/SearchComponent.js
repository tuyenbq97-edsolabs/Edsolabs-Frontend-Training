import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function SearchComponent({ setListWeather, setList3Days }) {
  const [search, setSearch] = useState([]);

  const Search = () => {
    setSearch(search);
    console.log(search);
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}?key=${process.env.REACT_APP_KEY}&q=${search}&days=3`
      )
      .then((res) => {
        setListWeather(res.data);
        setList3Days(res.data?.forecast?.forecastday);
      });
  };

  return (
    <div className="d-flex justify-content-center">
      <Form className="d-flex justify-content-center">
        <Form.Group className="mt-3 mb-2 mx-1" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter your country"
            name="name"
            value={search.name}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Group>
        <Button
          className="mt-3 mb-2"
          variant="primary"
          type="button"
          onClick={Search}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SearchComponent;
