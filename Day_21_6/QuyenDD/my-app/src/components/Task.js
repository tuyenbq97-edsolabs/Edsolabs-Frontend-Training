import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import DotsLoading from '../images/dotsloading.svg';
import Tag from '../images/tag.svg';
import { Image } from 'react-bootstrap';

const StyledImageTag = styled.img`
  width: 3%;
`;
const StyledImageIcon = styled.img`
  width: 0.7%;
  cursor: pointer;
`;

export default function Task({ item }) {
  return (
    <div className="mb-3 d-flex align-items-center border p-3 bg-light">
      <span className="mx-5">{item.description}</span>

      <div className="w-50">
        <StyledImageTag src={Tag}></StyledImageTag>

        <span className="mx-5">
          <span>
            {item.start_time ? moment(item.start_time).format('HH:mm') : ''}
          </span>
          {' - '}
          <span>
            {' '}
            {item.end_time ? moment(item.end_time).format('HH:mm') : ''}
          </span>
        </span>
        <span className="mx-5">{item.time_spent ? item.time_spent : ''}</span>

        <StyledImageIcon src={DotsLoading}></StyledImageIcon>
      </div>
    </div>
  );
}
