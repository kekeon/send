import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {Link } from 'react-router-dom'


import {withRouter} from 'react-router-dom'

import homeService from '../service/homeService'

 class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: '',pwd:''};

        this.inputPwd = this.inputPwd.bind(this);
        this.inputUser = this.inputUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    inputUser(event) {
        this.setState({user: event.target.value});
    }
    inputPwd(event) {
        this.setState({pwd: event.target.value});
    }

    handleSubmit(event) {

        homeService().login(this.state).then(res=>{
            console.log(res);
            this.props.history.push("/home")
        })
        event.preventDefault();
    }


    render(){
        return (
            <div className='login-form'>
                {/*
                 Heads up! The styles below are necessary for the correct render of this example.
                 You can do same with CSS, the main idea is that all the elements up to the `Grid`
                 below must have a height of 100%.
                 */}
                <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>

                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            <Image src='./assets/logo.png' /> Log-in to your account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user'
                                            iconPosition='left'
                                            placeholder='E-mail address'
                                            onChange={this.inputUser}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.inputPwd}
                                />

                                <Button color='teal' fluid size='large' onClick={this.handleSubmit}>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us? <a href='#'>Sign Up</a>
                        </Message>

                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default withRouter((match, location, history)=>{

    return new Login(match, location, history)
})
