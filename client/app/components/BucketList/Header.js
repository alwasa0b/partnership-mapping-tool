import React from 'react';
import { Row, Col } from 'antd';

const Header = () => (
  <div>
    <Row gutter={5}>
      <Col span={3}>
        <div>Code</div>
      </Col>
      <Col span={5}>Label</Col>
      <Col span={5}>Color</Col>
      <Col span={2}>Row</Col>
      <Col span={2}>Column</Col>
      <Col span={2} />
    </Row>
  </div>
);

export default Header;
