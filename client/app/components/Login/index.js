import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

const Login = ({ isAuthenticated, location, form, update, login }) => {
  const { from } = location.state || { from: { pathname: '/' } };

  const { getFieldDecorator } = form;

  if (isAuthenticated) {
    return <Redirect to={from} />;
  }

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        form.validateFields(err => {
          if (!err) login();
        });
      }}
      className="login-form"
    >
      <FormItem>
        {getFieldDecorator('userName', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
            onChange={e => {
              form.setFieldsValue({
                userName: e.target.value,
              });
              update({ key: 'username', value: e.target.value });
            }}
          />,
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
            onChange={e => {
              form.setFieldsValue({
                password: e.target.value,
              });
              update({ key: 'password', value: e.target.value });
            }}
          />,
        )}
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </FormItem>
    </Form>
  );
};

const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;
