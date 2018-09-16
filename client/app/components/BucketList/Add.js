import React from 'react';
import { Row, Col, Icon } from 'antd';

const Add = () => (
  <div>
    <Row gutter={5}>
      <Col span={3}>
        <Icon
          type="plus-circle"
          theme="outlined"
          style={{ cursor: 'pointer' }}
        />
      </Col>
    </Row>
  </div>
);

export default Add;
