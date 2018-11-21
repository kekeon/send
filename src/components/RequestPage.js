import React from 'react'
import { Button, Checkbox, Form,Menu,Select,TextArea } from 'semantic-ui-react'

export default class RequestPage extends React.Component {
    constructor(props){
        super(props);
    }

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        const { activeItem } = this.state
        const options = [{text:'GET',value:'GET'},{text:'POST',value:'POST'},{text:'DELETE',value:'DELETE'},{text:'PUT',value:'PUT'}]
        return (
            <section id="request-page">
                <Menu>
                    <Menu.Item
                        name='editorials'
                        active={activeItem === 'editorials'}
                        onClick={this.handleItemClick}
                    >
                        Editorials
                    </Menu.Item>

                    <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
                        Reviews
                    </Menu.Item>

                    <Menu.Item
                        name='upcomingEvents'
                        active={activeItem === 'upcomingEvents'}
                        onClick={this.handleItemClick}
                    >
                        Upcoming Events
                    </Menu.Item>
                </Menu>
                <section className="request-box">
                    <Form>
                        <Form.Field inline className="form-item">
                            <label>名称</label>
                            <input placeholder='请输入名称' />
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