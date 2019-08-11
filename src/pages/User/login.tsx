import React, {FormEvent} from 'react';
import {connect} from 'dva'
import router from 'umi/router';
import ReactCanvasNest from 'react-canvas-nest';

import 'antd/dist/antd.css';
import {Button,
  Checkbox,
  Form,
  Icon,
  Input,
  Row,
  Col,
} from 'antd';

import styles from './styles/login.less';
import {Dispatch, Loading} from "@/models/connect";
import {FormComponentProps} from "antd/lib/form/Form";



interface LoginProps  extends FormComponentProps {
  loading: Loading;
  dispatch: Dispatch;
  children: React.ReactElement;
}

interface FormState {

}
// Type 'ComponentClass<RcBaseFormProps & Pick<Readonly<LoginProps>, "loading" | "dispatch" | "children">, any>' is not assignable to type 'typeof Login'.
@connect(({login, loading})=>({
  login,
  loading
}))

class Login extends React.Component<LoginProps>{


  handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    const {dispatch} = this.props

    this.props.form.validateFields((err, values) => {
      if (!err) {

        dispatch({type:'login/post', payload:values}).then(res=>{
          router.push('/doc/edit')
        })
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const {loading} = this.props;

    const canvasConfig = {
      config: {
        pointColor: '255, 255, 250',
        lineColor: '255, 255, 255',
        count: 120,
      },
      style:{zIndex: 2 }
    }

    console.log(loading);
    return (
      <div className={styles['normal']}>
        <h1 className="title">Welcome use send</h1>
        <Row type="flex" justify="center" align="middle" className="login-row">
         {/* <ReactCanvasNest className = 'canvasNest' {...canvasConfig}/>*/}
          <Col span={6} className="login-box">
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
                <Button type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        loading={loading.effects['login/post']}
                >
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

export default Form.create({name: 'formProps'} )(Login);

