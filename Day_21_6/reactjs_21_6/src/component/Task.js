import React, { useState } from 'react';
import Tag from '../image/Tag.png';
import moment from 'moment';
import ImageTagStyled from '../container/CreateTag';
import styled from 'styled-components';
import axios from 'axios';
import { resolveHookState } from 'react-use/lib/misc/hookState';

const ImgStyled = styled.img`
  width: 25px;
`;

const DotsStyled = styled.span`
  z-index: 1;
`;
const DivSelectStyled = styled.div`
  z-index: 2;
`;

function Task({ infoTasks, setDbTags, dbTags, dbTasks, setDbTasks }) {
  const [showListSelect, setShowListSelect] = useState(false);

  const deleteTask = (id) => {
    axios.delete(`${process.env.REACT_APP_API_KEY}/tasks/${id}`);
    const newDbTasks = dbTasks.filter((task) => {
      return task.id !== id;
    });
    setDbTasks(newDbTasks);
  };

  return (
    <div className=" d-flex justify-content-between border p-3 bg-light">
      <div className="d-inline-block w-25">
        <span>{infoTasks.description}</span>
      </div>
      <div className="d-inline-block w-50 ps-3">
        <ImgStyled src={Tag}></ImgStyled>
        <span className="mx-2">
          {dbTags
            ?.filter((tag) => infoTasks.tags.includes(tag.id))
            .map((info, idx) => (
              <span key={idx}>
                {info.name} {idx < infoTasks.tags.length - 1 ? ' , ' : ''}
              </span>
            ))}
        </span>
        <span className="mx-5">
          {infoTasks.start_time
            ? moment(infoTasks.start_time).format('HH:mm')
            : ''}
          {' - '}{' '}
          {infoTasks.end_time ? moment(infoTasks.end_time).format('HH:mm') : ''}
        </span>
        <span className="mx-3">
          {infoTasks.time_spent ? infoTasks.time_spent : ''}
        </span>
      </div>
      <button
        className="border-0 bg-light position-relative"
        onClick={() => setShowListSelect(!showListSelect)}
      >
        <DotsStyled>⋮</DotsStyled>
        {showListSelect === true && (
          <DivSelectStyled className="position-absolute bg-secondary end-0">
            <button className="py-2 px-3 border w-100">start</button>
            <button
              className="py-2 px-3 border w-100"
              onClick={deleteTask(infoTasks.id)}
            >
              delete
            </button>
          </DivSelectStyled>
        )}
      </button>
    </div>
  );
}

export default Task;
