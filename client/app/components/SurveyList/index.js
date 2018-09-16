import React from 'react';
import { Table } from 'antd';
import Selector from './Selector';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Turnout',
    dataIndex: 'turnout',
    key: 'turnout',
  },
];

const SurveyList = ({
  items,
  onSurveySelected,
  onCreate,
  onView,
  onUpdate,
}) => (
  <div>
    <Table
      columns={columns}
      dataSource={items}
      rowKey={'name'}
      onRowClick={onSurveySelected}
    />
    <Selector onCreate={onCreate} onView={onView} onUpdate={onUpdate} />
  </div>
);

export default SurveyList;
