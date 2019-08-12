import  React, {Component} from "react"
import {
  Form,
  Input,
  Modal,
  Select} from 'antd';
import {FormComponentProps} from "antd/lib/form/Form";


interface AddProjectFormProps extends FormComponentProps {
  closeModal: () => void;
  visible: boolean;
}


class AddProjectForm extends Component<AddProjectFormProps> {


  state = {visible: false};


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
    } = this.props;


    const Option = Select.Option;
    const SelectBefore = (
      <Select defaultValue="GET" style={{width: '120px'}}>
        <Option value="GET"/>
        <Option value="POST"/>
        <Option value="PUT"/>
        <Option value="DELETE"/>
        <Option value="PATCH"/>
        <Option value="OPTIONS"/>
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

    const Type = typeList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>);

    const { getFieldDecorator } = this.props.form;

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
              rules: [
                {
                  required: true,
                  message: '请输入地址'
                }
              ]
            })(
              <Input addonBefore={SelectBefore} placeholder="如：/login" allowClear/>
            )}
          </Form.Item>

        </Form>
      </Modal>
    )
  }
}

export default Form.create({name: 'AddProjectForm'})(AddProjectForm)

