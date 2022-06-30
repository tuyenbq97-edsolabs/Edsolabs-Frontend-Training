import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Dropdown, Image } from 'react-bootstrap';
import Tag from '../image/Tag.png';
import { useInterval } from 'react-use';
import IconStart from '../image/IconStart.png';
import IconStop from '../image/IconStop.png';
import moment from 'moment';
import axios from 'axios';

const InputTitleTagStyled = styled.input`
  font-size: 30px;
  height: 100%;
  border: none;
  &:focus {
    outline: none;
  }
`;
const ButtonImage = styled.button`
  border: none;
  width: 50px;
  height: 50px;
  background-color: white;
`;
export const ImageTagStyled = styled(Image)`
  width: 100%;
`;

const ImageStartStyled = styled(ImageTagStyled)`
  width: 150%;
`;
const Time = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function CreateTag({ dbTags, dbTasks, setDbTasks }) {
  const [titleTag, setTitleTag] = useState('This is my task');

  const [time, setTime] = useState(0);
  const [isRunning, setIsRuning] = useState(false);
  const countRef = useRef(null);

  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = `${Math.floor(time / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
  const stopWatch = `${getHours}:${getMinutes}:${getSeconds}`;

  const [showCheckBox, setShowCheckBox] = useState(false);

  const [inputs, setInputs] = useState({
    description: 'This is my task',
    start_time: null,
    end_time: null,
    time_spent: null,
    tags: [],
    status: null,
  });

  const [resetIinputs, setResetInputs] = useState({
    description: 'This is my task',
    start_time: null,
    end_time: null,
    time_spent: null,
    tags: [],
    status: null,
  });

  const arrayChecked = [];

  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      arrayChecked.push(Number(value));
    } else {
      arrayChecked.splice(arrayChecked.indexOf(value), 1);
    }
  };

  const RequestCreate = () => {
    if (isRunning === false) {
      const startTime = new Date();
      setIsRuning(!isRunning);
      countRef.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      setInputs((values) => ({
        ...values,
        description: titleTag,
        tags: arrayChecked,
        start_time: moment(startTime).format('YYYY MM DD, HH:mm:ss'),
      }));
    } else {
      setIsRuning(!isRunning);
      const endTime = new Date();
      setInputs((values) => ({
        ...values,
        time_spent: `${getSeconds} seconds`,
        end_time: moment(endTime).format('YYYY MM DD, HH:mm:ss'),
      }));
      clearInterval(countRef.current);
      setTime(0);
    }
  };

  const ListCheckBox = () => {
    if (showCheckBox === true) {
      return dbTags.map((item, idx) => (
        <div key={idx} className="d-flex align-items-center py-2 px-3 border">
          <input
            type="checkbox"
            id="titleTag"
            className="titleTag"
            name={item.name}
            value={item.id}
            onChange={handleChange}
          />
          <span className=" me-5 ms-4">{item.name}</span>
        </div>
      ));
    }
  };

  useEffect(() => {
    if (dbTasks) {
      if (isRunning === true) {
        axios
          .post(`${process.env.REACT_APP_API_KEY}/tasks`, inputs)
          .then((res) => {
            const listTagClone = [...dbTasks];
            setDbTasks(listTagClone.concat(res.data));
          });
      } else {
        axios.put(
          `${process.env.REACT_APP_API_KEY}/tasks/${dbTasks.length}`,
          inputs
        );

        axios.get(`${process.env.REACT_APP_API_KEY}/tasks`).then((res) => {
          setDbTasks(res.data);
        });
      }
    }
  }, [inputs]);
  return (
    <div className="d-flex">
      <div className="ml-3">
        <InputTitleTagStyled
          value={titleTag}
          onChange={(e) => setTitleTag(e.target.value)}
          className="fs-2 fw-bold p-4"
        />
      </div>
      <div className="d-flex justify-content-end w-100 align-items-center">
        <button className="dropdown border-0 bg-white">
          <ImageTagStyled
            className="position-relative"
            src={Tag}
            alt="Cinque Terre"
            width="100"
            height="50"
            onClick={() => setShowCheckBox(!showCheckBox)}
          />
          <div className="dropdown-content position-absolute bg-secondary end-0">
            {dbTags && ListCheckBox()}
          </div>
        </button>

        <Time>
          <span className="d-inline-block w-50 fs-2 fw-bold">{stopWatch}</span>
          <ButtonImage className="rounded-circle" onClick={RequestCreate}>
            {isRunning ? (
              <ImageStartStyled
                src={IconStop}
                className="rounded-circle d-inline-block"
              />
            ) : (
              <ImageStartStyled
                src={IconStart}
                className="rounded-circle d-inline-block"
              />
            )}
          </ButtonImage>
        </Time>
      </div>
    </div>
  );
}

export default CreateTag;
