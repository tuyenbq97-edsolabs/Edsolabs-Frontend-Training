import React, { useState } from 'react';
import { Form, Button, FormGroup } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  width: 500px;
  min-height: 50%;
  padding: 32px 24px;
  background: #fff;
  border-radius: 2px;
  margin: 24px;
  align-self: center;
  box-shadow: 0 2px 5px 0 rgba(51, 62, 73, 0.1);
`;
const StyledMain = styled.div`
  background: #f1f1f1;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
const StyledFormGroup = styled(FormGroup)`
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
  font-weight: 500;
`;
const StyledButton = styled(Button)`
  width: 100%;
  font-weight: 600;
  font-size: 18px;
`;
export default function Login({ setValue }) {
  const [data, setData] = useState({
    user: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const baseURL = `${process.env.REACT_APP_BASE_URL}/users?username=${data.user}&password=${data.password}`;

    axios
      .get(baseURL)
      .then((res) => {
        setValue(res.data);
      })
      .catch((err) => {
        console.log('err : ', err);
      });
  };
  return (
    <StyledMain>
      <StyledForm>
        <h3 className="text-center">Log in </h3>
        <StyledFormGroup>
          <Form.Label className="mt-3">Username :</Form.Label>
          <Form.Control
            type="text"
            name="user"
            onChange={(e) =>
              setData((value) => ({
                ...value,
                user: e.target.value,
              }))
            }
            value={data.user || ''}
            required
            placeholder="Enter User name"
          />
        </StyledFormGroup>

        <StyledFormGroup>
          <Form.Label className="mt-3">Password :</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={data.password}
            onChange={(e) =>
              setData((value) => ({
                ...value,
                password: e.target.value,
              }))
            }
            placeholder="Password"
          />
        </StyledFormGroup>

        <StyledButton variant="primary" type="button" onClick={handleSubmit}>
          Login
        </StyledButton>
      </StyledForm>
    </StyledMain>
  );
}
