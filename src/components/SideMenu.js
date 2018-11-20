import React from 'react'
import {Link} from "react-router-dom"
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import ToolMenu from '../common/components/ToolMenu'
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
                        <Menu.Item as={Link} to="/main/create-project">
                            <Button animated='vertical'>
                                <Button.Content hidden>创建项目</Button.Content>
                                <Button.Content visible>
                                    <Icon name='add circle' />
                                </Button.Content>
                            </Button>
                        </Menu.Item>
                        <Menu.Item as={Link} to="/main/invite-member">邀请战友</Menu.Item>
                        <Menu.Item as={Link} to="/main/project-menu"  className="clearfix">项目menu <Icon name="ellipsis horizontal" className="float-right ellipsis-tool">
                            <ToolMenu></ToolMenu>
                        </Icon></Menu.Item>
                    </Sidebar>
                </Sidebar.Pushable>
            </div>
        )
    }
}