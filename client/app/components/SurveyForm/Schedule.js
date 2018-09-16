import React from 'react';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  DatePicker,
  InputNumber,
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const Schedule = () => {
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  return (
    <div>
      <FormItem label={'Start Date'} {...formItemLayout}>
        <DatePicker.RangePicker placeholder={'Start Date'} />
      </FormItem>
      <FormItem label={'Interval'} {...formItemLayout}>
        <InputNumber placeholder={'Please enter Interval Number'} />
      </FormItem>
      <FormItem label={'Interval Times'} {...formItemLayout}>
        <InputNumber placeholder={'Please enter Interval Times'} />
      </FormItem>
      <FormItem label={'Interval Units'} {...formItemLayout}>
        <Select placeholder="Please select unit">
          <Option value="day">Day</Option>
          <Option value="week">Week</Option>
          <Option value="month">Month</Option>
        </Select>
      </FormItem>
    </div>
  );
};

export default Schedule;
