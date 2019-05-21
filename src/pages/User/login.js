import React from 'react';
import 'antd/dist/antd.css';
import {Button, Checkbox, Form, Icon, Input, Row, Col} from 'antd';
import router from 'umi/router';
import {login} from "../../service/userService.js";

import styles from './login.css'


class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }

      let payload = {}
      login(payload).then(res=>{
        console.log(res);
        router.push('/doc/edit')
      })
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Welcome use send</h1>
        <Row type="flex" justify="center" align="middle" className="login-row">
          <Col span={6}>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('userName', {
                  rules: [{required: true, message: 'Please input your username!'}],
                })(
                  <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{required: true, message: 'Please input your Password!'}],
                })(
                  <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                         placeholder="Password"/>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export const LoginForm = Form.create({name: 'normal_login'})(Login);
