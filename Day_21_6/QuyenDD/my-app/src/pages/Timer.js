import axios from 'axios';
import React, { useEffect } from 'react';

import { Col, Row, Image } from 'react-bootstrap';
import TasksList from '../components/TasksList';
import Navigation from '../components/Navigation';
import styled from 'styled-components';
import Tag from '../components/Tag';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
const StyledCol = styled(Col)`
  border: 3px solid;
  height: 100vh;
`;

const StyledRow = styled(Row)`
  --bs-gutter-x: 0rem;
  --bs-gutter-y: 0rem;
  border: 3px solid;
  width: 100%;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  border: 3px solid;
  width: 30%;
  margin: 12px;
`;

const StyledFirstRow = styled(StyledRow)`
  height: 15%;
  display: flex;
  flex-direction: row;
`;
const StyledSecondRow = styled(StyledRow)`
  height: 85%;
  width: 100%;
  padding: 25px;
`;
const StyledInputDate = styled.input`
  width: 12%;
  border-radius: 3px;
  margin-left: 20px;
  margin-bottom: 60px;
`;
export default function Timer({
  remove,
  value,
  tasks,
  tags,
  setTasks,
  setTags,
}) {
  useEffect(() => {
    const urlTasks = `${process.env.REACT_APP_BASE_URL}/tasks`;
    axios.get(urlTasks).then((res) => {
      setTasks(res.data);
    });
    const urlTags = `${process.env.REACT_APP_BASE_URL}/tags`;
    axios.get(urlTags).then((res) => {
      setTags(res.data);
    });
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center h-100vh">
      <StyledCol md={2}>
        {value &&
          value.map((info, idx) => (
            <div key={idx}>
              <StyledImage src={info.avatar} />
              <span className="fw-bold">{info.fullname}</span>
            </div>
          ))}
        <Navigation remove={remove} />
      </StyledCol>
      <StyledCol md={10}>
        <StyledFirstRow>
          <Tag />
        </StyledFirstRow>
        <StyledSecondRow>
          <div className="w-100">
            <span className="fw-bold">Date filter: </span>
            <StyledInputDate type="date" />
            <TasksList tasks={tasks} />
          </div>
        </StyledSecondRow>
      </StyledCol>
    </div>
  );
}
