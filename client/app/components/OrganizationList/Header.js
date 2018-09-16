import React from 'react';
import { Row, Col } from 'antd';

const OrganizationHeader = () => (
  <div>
    <Row gutter={5}>
      <Col span={3}>Code</Col>
      <Col span={5}>Name</Col>
      <Col span={2} />
    </Row>
  </div>
);

export default OrganizationHeader;
