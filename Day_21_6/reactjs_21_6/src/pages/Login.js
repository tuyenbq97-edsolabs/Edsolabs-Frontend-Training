/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

export const FormContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function Login({ setValue, setDbUser }) {
  const [inputs, setInputs] = useState({
    uname: '',
    pass: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `${process.env.REACT_APP_API_KEY}/users?username=${inputs.uname}&password=${inputs.pass}`;
    axios.get(url).then((res) => {
      if (res.data.length) {
        setValue(res.data);
        setDbUser(res.data);
      } else {
        alert('Tài khoản hoặc mật khẩu không đúng');
      }
    });
  };
  return (
    <FormContainerStyled>
      <Form action="Time.js" className="border border-dark p-5">
        <Form.Group className="mb-3">
          <Form.Label>User</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter Username"
            name="uname"
            value={inputs.uname || ''}
            onChange={(e) =>
              setInputs((values) => ({
                ...values,
                uname: e.target.value,
              }))
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            placeholder="Password"
            name="pass"
            autoComplete="on"
            value={inputs.pass || ''}
            onChange={(e) =>
              setInputs((values) => ({
                ...values,
                pass: e.target.value,
              }))
            }
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </FormContainerStyled>
  );
}

export default Login;
