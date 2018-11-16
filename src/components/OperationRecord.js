
import React from 'react'
import { Form, TextArea, Button,Header, Icon,Container } from 'semantic-ui-react'


export default class OperationRecord extends React.Component {
//envelope outline

    render(){
        return(
            <section class="main-page" id="invite">
                <div class="page-box">
                    <Form>
                        <Header as='h5'>
                            <Icon name='envelope outline' />
                            <Header.Content>邀请战友</Header.Content>
                        </Header>
                        <Form.Field
                            id='form-textarea-control-opinion'
                            control={TextArea}
                            placeholder='请输入战友email...,使用 ‘ / ’ 隔开'
                        />
                        <Container textAlign='left' className="msg">快和你的战友，抓紧开始吧......</Container>
                        <Form.Field
                            id='form-button-control-public'
                            control={Button}
                            content='发送邀请'
                        />
                    </Form>
                </div>
            </section>
        )
    }
}