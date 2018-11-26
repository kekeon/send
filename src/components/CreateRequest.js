import React from 'react'
import { Button, Checkbox, Form,Menu,Select,TextArea,Header,Icon } from 'semantic-ui-react'

export default class RequestPage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const options = [{text:'GET',value:'GET'},{text:'POST',value:'POST'},{text:'DELETE',value:'DELETE'},{text:'PUT',value:'PUT'}]
        return (
            <section id="request-page">
                <section className="request-box">
                    <Form>
                        <Header as='h5' className="header-title"><Icon name="target" />创建请求</Header>
                        <Form.Field inline className="form-item">
                            <label>名称</label>
                            <input placeholder='请输入名称' className="input-name"/>
                        </Form.Field>
                        <Form.Field inline className="form-item">
                            <label>URL</label>
                            <div className="form-select">
                                <Select placeholder="请求方式" className="select" options={options}></Select>
                                <input placeholder='请求地址' />
                            </div>
                        </Form.Field>
                        <Form.Field inline className="form-item">
                            <label>描述</label>
                            <TextArea placeholder='请输入文档描述'/>
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </section>
            </section>

        )
    }
}