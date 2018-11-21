

import React from 'react'
import { Form,Input } from 'semantic-ui-react'

const options = [
    { key: 'p', text: '个人', value: 'pritive' },
    { key: 't', text: '团队', value: 'public' },
]
export default class CreateProject extends React.Component {

    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <section id="create-project" className="main-page">
                <div className="page-box">
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='项目名称' placeholder='First name' />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Select fluid label='选择类别' options={options} placeholder='Gender' />
                        </Form.Group>
                        <Form.TextArea label='项目描述' placeholder='介绍一下项目吧' />
                        <Form.Checkbox label='我会遵守send使用条约' />
                        <Form.Button>创建</Form.Button>
                    </Form>
                </div>
            </section>
        )
    }
}