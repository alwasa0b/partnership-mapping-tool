import React from 'react';
import { Form, Input } from 'antd';

import Submit from './Submit';
import Schedule from './Schedule';
import BucketList from '../BucketList';
import OrganizationList from '../OrganizationList';

const FormItem = Form.Item;

const SurveyForm = ({ form, onSave, onCancel }) => (
  <div>
    <Form layout={'vertical'}>
      <FormItem label={'Name'}>
        <Input placeholder={'Please enter Survey Name'} />
      </FormItem>
      <FormItem label={'Message'}>
        <Input.TextArea placeholder={'Please enter Message'} />
      </FormItem>
      <FormItem label={'Source Email'}>
        <Input placeholder={'Please enter the Source Email'} />
      </FormItem>
      <FormItem label={'Target Emails'}>
        <Input.TextArea placeholder={'Comma separated email list'} />
      </FormItem>
      <FormItem label={'Schedule'} wrapperCol={{ offset: 5 }}>
        <Schedule />
      </FormItem>
      <FormItem label={'Buckets'} wrapperCol={{ offset: 5 }}>
        <BucketList items={form.buckets} />
      </FormItem>
      <FormItem label={'Organizations'} wrapperCol={{ offset: 5 }}>
        <OrganizationList items={form.organizations} />
      </FormItem>
    </Form>
    <FormItem wrapperCol={{ offset: 20 }}>
      <Submit onSave={onSave} onCancel={onCancel} />
    </FormItem>
  </div>
);

export default SurveyForm;
