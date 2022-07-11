import React, { useState, useEffect } from 'react';
import { Image, Form } from 'react-bootstrap';
import styled from 'styled-components';
import IconPlay from '../images/play.svg';
import IconStop from '../images/stop.svg';
const StyledInputTag = styled.input`
  font-size: 30px;
  height: 100%;
  border: none;
  &:focus {
    outline: none;
  }
`;

const StyledTimer = styled.div`
  margin: 0 10px;
  width: 45%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledButton = styled.button`
  border: none;
  width: 60px;
  height: 60px;
  background-color: white;
`;
export default function Tag() {
  const [tag, setTag] = useState('What are you working on ?');

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [option, setOption] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      if (seconds === 60) {
        setSeconds(0);
        setMinutes((minutes) => minutes + 1);
      }
      if (minutes === 60) {
        setMinutes(0);
        setHours((hours) => hours + 1);
      }
    } else if (!isActive && seconds !== 0 && minutes !== 0 && hours !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes, hours]);

  function toggle() {
    setIsActive(!isActive);
  }

  return (
    <div className="d-flex">
      <div className="ml-3">
        <StyledInputTag
          className=" fw-bold p-4"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
      </div>

      <div className="d-flex justify-content-end w-100 align-items-center">
        <Form.Select
          className="w-25"
          aria-label="Default select example"
          defaultValue={option}
        >
          <option value="Online" onChange={(e) => setOption(e.target.value)}>
            Online
          </option>
          <option value="Meeting" onChange={(e) => setOption(e.target.value)}>
            Meeting
          </option>
          <option value="Training" onChange={(e) => setOption(e.target.value)}>
            Training
          </option>
          <option value="Relax" onChange={(e) => setOption(e.target.value)}>
            Relax
          </option>
        </Form.Select>
        <StyledTimer>
          <span className="fs-3 fw-bold">
            {hours} : {minutes} : {seconds}
          </span>
          <StyledButton onClick={toggle}>
            {isActive ? <Image src={IconStop} /> : <Image src={IconPlay} />}
          </StyledButton>
        </StyledTimer>
      </div>
    </div>
  );
}
