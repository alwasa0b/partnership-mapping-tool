import React from 'react';
import { Row, Col, Icon } from 'antd';

const OrganizationItem = ({ item }) => (
  <div>
    <Row gutter={5}>
      <Col span={3}>
        <div>{item.code}</div>
      </Col>
      <Col span={5}>{item.name}</Col>
      <Col span={2}>
        <Icon type="edit" theme="outlined" style={{ cursor: 'pointer' }} />
        <Icon type="delete" theme="outlined" style={{ cursor: 'pointer' }} />
      </Col>
    </Row>
  </div>
);

export default OrganizationItem;
