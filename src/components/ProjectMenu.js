import React from 'react'
import { Button, Checkbox, Form,Menu } from 'semantic-ui-react'

export default class ProjectMenu extends React.Component {
    constructor(props){
        super(props);
    }

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    render(){
        const { activeItem } = this.state

        return (
            <section>
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
                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </section>

        )
    }
}