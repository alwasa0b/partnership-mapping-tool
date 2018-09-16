import React from 'react';
import { Row, Col, Button } from 'antd';

const Selector = ({ onCreate, onView, onUpdate }) => {
  return (
    <Row type={'flex'}>
      <Col>
        <Button onClick={onCreate}>Create</Button>
      </Col>
      <Col>
        <Button onClick={onView}>View</Button>
      </Col>
      <Col>
        <Button onClick={onUpdate}>Update</Button>
      </Col>
    </Row>
  );
};

export default Selector;
