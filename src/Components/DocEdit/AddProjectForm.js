import React from "react"
import {Button, Form, Icon, Input, Modal, Select} from 'antd';


class AddProjectForm extends React.Component {


  state = {visible: false}


  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const {
      getFieldsError
    } = this.props.form;

    const {
      visible,
      closeModal
    } = this.props


    const SelectBefore = (
      <Select defaultValue="GET" style={{width: '120px'}}>
        <Select.Option value="GET">GET</Select.Option>
        <Select.Option value="POST">POST</Select.Option>
        <Select.Option value="PUT">PUT</Select.Option>
        <Select.Option value="DELETE">DELETE</Select.Option>
        <Select.Option value="PATCH">PATCH</Select.Option>
        <Select.Option value="OPTIONS">OPTIONS</Select.Option>
      </Select>
    );

    const Type =
      (<Select defaultValue="1" style={{width: '90px'}}>
      <Select.Option value="1">公共分类</Select.Option>
      <Select.Option value="2">自定义接口</Select.Option>
    </Select>
    );
    return (

      <Modal
        title="添加接口"
        visible={visible}
        onOk={closeModal}
        onCancel={closeModal}
      >
        <Form layout="inline" onSubmit={this.handleSubmit}>

          <Form.Item>
            {Type}
          </Form.Item>

          <Form.Item>
            <Input addonBefore={SelectBefore} placeholder="如：/login" allowClear/>
          </Form.Item>
          <Form.Item >
              <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                     placeholder="Password"/>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              disabled={this.hasErrors(getFieldsError())}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

const addProject = Form.create()(AddProjectForm)

export default addProject

