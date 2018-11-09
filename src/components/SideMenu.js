import React from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
export default  class SideMenu extends  React.Component {
    state = { visible: false }

    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })
    handleSidebarHide = () => this.setState({ visible: false })

    render() {
        const { visible } = this.state

        return (
            <div id="side-menu">
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
                        <Menu.Item as='a'>home1</Menu.Item>
                        <Menu.Item as='a'>home2</Menu.Item>
                        <Menu.Item as='a'>home2</Menu.Item>
                    </Sidebar>
                </Sidebar.Pushable>
            </div>
        )
    }
}