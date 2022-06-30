import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Task from '../component/Task';

function ListTasks({ dbTasks, setDbTags, dbTags, setDbTasks }) {
  return (
    <Col className=" w-100">
      {dbTasks &&
        dbTasks.map((infoTasks, idx) => (
          <Row className="w-100" key={idx}>
            <Task
              infoTasks={infoTasks}
              setDbTags={setDbTags}
              dbTags={dbTags}
              dbTasks={dbTasks}
              setDbTasks={setDbTasks}
            />
          </Row>
        ))}
    </Col>
  );
}

export default ListTasks;
