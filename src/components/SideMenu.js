import React from 'react'
import {Link} from "react-router-dom"
import { Button, Header, Icon, Image, Menu, Segment, Sidebar,List } from 'semantic-ui-react'
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
                        <Menu.Item as={Link} to="/main/request"  className="clearfix">
                            项目menu
                            <Icon name="ellipsis horizontal" className="float-right ellipsis-tool">
                                <ToolMenu style="display:none;"></ToolMenu>
                            </Icon>
                            <List className="file-list">
                                    <List.Item>
                                        <List.Icon name='folder open outline' />
                                        <List.Content>
                                            <List.Header>概览</List.Header>
                                            <List.List>
                                                <List.Item>
                                                    <List.Icon name='folder outline' />
                                                    <List.Content>
                                                        <List.Header>
                                                            运营数据
                                                            <Icon name="ellipsis horizontal" className="float-right ellipsis-tool">
                                                                <ToolMenu style="display:none;"></ToolMenu>
                                                            </Icon>
                                                        </List.Header>
                                                    </List.Content>
                                                </List.Item>

                                                <List.Item>
                                                    <List.Icon name='folder outline' />
                                                    <List.Content>
                                                        <List.Header>
                                                            用户信息
                                                            <Icon name="ellipsis horizontal" className="float-right ellipsis-tool">
                                                                <ToolMenu style="display:none;"></ToolMenu>
                                                            </Icon>
                                                        </List.Header>
                                                    </List.Content>
                                                </List.Item>

                                                <List.Item>
                                                    <List.Icon name='target' />
                                                    <List.Content>
                                                        <List.Header>获取运营数据</List.Header>
                                                    </List.Content>
                                                </List.Item>

                                            </List.List>
                                        </List.Content>
                                    </List.Item>
                            </List>
                        </Menu.Item>
                    </Sidebar>
                </Sidebar.Pushable>
            </div>
        )
    }
}