import React from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox, Form, Icon, Input, Row, Col } from 'antd';
import userService from "../../service/userService.js";
class Login extends React.Component {
    constructor() {
        super(...arguments);
        this.handleSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
                let payload = {};
                userService().login(payload).then(res => {
                    console.log(res);
                });
            });
        };
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (React.createElement(Row, { type: "flex", justify: "center", align: "middle", className: "login-row" },
            React.createElement(Col, { span: 6 },
                React.createElement(Form, { onSubmit: this.handleSubmit, className: "login-form" },
                    React.createElement(Form.Item, null, getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(React.createElement(Input, { prefix: React.createElement(Icon, { type: "user", style: { color: 'rgba(0,0,0,.25)' } }), placeholder: "Username" }))),
                    React.createElement(Form.Item, null, getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(React.createElement(Input, { prefix: React.createElement(Icon, { type: "lock", style: { color: 'rgba(0,0,0,.25)' } }), type: "password", placeholder: "Password" }))),
                    React.createElement(Form.Item, null,
                        getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(React.createElement(Checkbox, null, "Remember me")),
                        React.createElement(Button, { type: "primary", htmlType: "submit", className: "login-form-button" }, "Log in"))))));
    }
}
export const LoginForm = Form.create({ name: 'normal_login' })(Login);
//# sourceMappingURL=login.js.map