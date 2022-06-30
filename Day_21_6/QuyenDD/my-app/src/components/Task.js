import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Tag from '../images/tag.svg';

const StyledImage = styled.img`
  width: 5%;
`;
export default function Task({ item }) {
  return (
    <div className="mb-3 d-flex align-items-center border p-3 bg-light">
      <span className="mx-5">{item.description}</span>

      <div className="w-50">
        <StyledImage src={Tag}></StyledImage>

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
        <span className="mx-3">{item.time_spent ? item.time_spent : ''}</span>
      </div>
    </div>
  );
}
