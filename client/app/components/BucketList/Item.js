import React from 'react';
import { Row, Col, Icon } from 'antd';

const Item = ({ item }) => (
  <div>
    <Row gutter={5}>
      <Col span={3}>
        <div>{item.code}</div>
      </Col>
      <Col span={5}>{item.label}</Col>
      <Col span={5}>{item.color}</Col>
      <Col span={2}>{item.column}</Col>
      <Col span={2}>{item.row}</Col>
      <Col span={2}>
        <Icon type="edit" theme="outlined" style={{ cursor: 'pointer' }} />
        <Icon type="delete" theme="outlined" style={{ cursor: 'pointer' }} />
      </Col>
    </Row>
  </div>
);

export default Item;
