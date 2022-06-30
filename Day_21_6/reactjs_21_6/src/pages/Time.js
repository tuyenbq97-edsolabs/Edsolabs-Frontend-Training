import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { FormContainerStyled } from './Login';
import { useLocalStorage } from 'react-use';
import axios from 'axios';
import CreateTag from '../container/CreateTag';
import NavLink from '../container/NavLink';
import moment from 'moment';
import ListTasks from '../container/ListTasks';

const ColStyled = styled(Col)`
  border: 5px solid;
  height: 100vh;
`;
const RowStyled = styled(Row)`
  --bs-gutter-x: 0rem;
  border: 3px solid black;
  width: 100%;
`;
const FirstRowStyled = styled(RowStyled)`
  height: 15%;
  display: flex;
  flex-direction: row;
`;
const SecondRowStyled = styled(RowStyled)`
  height: 85%;
  width: 100%;
  padding: 25px;
`;
const ImageStyled = styled(Image)`
  border-radius: 50%;
  border: 5px solid black;
  width: 25%;
  margin: 10px;
`;
const UserInfoStyled = styled.div`
  height: 20%;
`;

const InputDate = styled.input`
  width: 15%;
  border-radius: 5px;
  margin-left: 20px;
  margin-bottom: 60px;
`;
const ListTaskStyled = styled.div`
  width: 100%;
`;

function Time({ remove, value, setDbTasks, dbTasks, setDbTags, dbTags }) {
  useEffect(() => {
    const urlTask = `${process.env.REACT_APP_API_KEY}/tasks`;
    axios.get(urlTask).then((res) => {
      setDbTasks(res.data);
    });
    const urlTag = `${process.env.REACT_APP_API_KEY}/tags`;
    axios.get(urlTag).then((res) => {
      setDbTags(res.data);
    });
  }, []);
  return (
    <FormContainerStyled>
      <ColStyled md={2}>
        {value.map((info, idx) => (
          <div key={idx}>
            <UserInfoStyled>
              <ImageStyled src={info.avatar} />
              <span className="fw-bold">{info.fullname}</span>
            </UserInfoStyled>
          </div>
        ))}
        <NavLink remove={remove} />
      </ColStyled>
      <ColStyled md={10}>
        <FirstRowStyled>
          <CreateTag
            dbTags={dbTags}
            dbTasks={dbTasks}
            setDbTasks={setDbTasks}
          />
        </FirstRowStyled>
        <SecondRowStyled>
          <ListTaskStyled>
            <span className="fw-bold">Date filter: </span>
            <InputDate type="date" />
            <ListTasks
              dbTasks={dbTasks}
              setDbTags={setDbTags}
              dbTags={dbTags}
              setDbTasks={setDbTasks}
            />
          </ListTaskStyled>
        </SecondRowStyled>
      </ColStyled>
    </FormContainerStyled>
  );
}

export default Time;
