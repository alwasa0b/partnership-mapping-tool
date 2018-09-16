import React from 'react';
import { Form, Input, Row, Col, Icon } from 'antd';

const FormItem = Form.Item;

const OrganizationForm = () => (
  <div>
    <Row gutter={5}>
      <Col span={3}>
        <Input />
      </Col>
      <Col span={5}>
        <Input />
      </Col>
      <Col span={2}>
        <Icon
          type="check-circle"
          theme="outlined"
          style={{ cursor: 'pointer' }}
        />
        <Icon
          type="close-circle"
          theme="outlined"
          style={{ cursor: 'pointer' }}
        />
      </Col>
    </Row>
  </div>
);

export default OrganizationForm;
