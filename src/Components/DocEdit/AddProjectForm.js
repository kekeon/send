import React from "react"
import {Form, Input, Modal, Select} from 'antd';


class AddProjectForm extends React.Component {


  state = {visible: false}


  componentDidMount() {
    // To disabled submit button at the beginning.
    //this.props.form.validateFields();
  }

  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.closeModal()
      }
    });
  }

  render() {

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

    const typeList = [
      {name: '公共分类', id: 1},
      {name: '自定义接口', id: 2},
      {name: '私有接口', id: 3}
    ];

    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 18},
    };

    const Type = typeList.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>);

    const {getFieldDecorator} = this.props.form;

    return (

      <Modal
        title="添加接口"
        visible={visible}
        onOk={this.handleSubmit}
        onCancel={closeModal}
      >
        <Form {...formItemLayout}>

          <Form.Item label="接口分类">
            {getFieldDecorator('type_id', {
              initialValue: typeList[0].id,
              rules: [{required: true, message: '请选择类型'}],
            })(
              <Select>{Type}</Select>
            )}
          </Form.Item>

          <Form.Item label="接口地址">
            {getFieldDecorator('address', {
              rules: [{required: true, message: '请输入地址'}]
            })(
              <Input addonBefore={SelectBefore} placeholder="如：/login" allowClear/>
            )}
          </Form.Item>
          <Form.Item label="接口名称">
            {getFieldDecorator('api_name', {rules: [{required: true, message: '请输入接口名称'}]})(
              <Input type="text" placeholder="请输入接口名称"/>
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

const addProject = Form.create({name:'add_model_Api'})(AddProjectForm)

export default addProject

