import React from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class HomeCp extends React.Component {

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        const { activeItem } = this.state

        return (

            <Menu secondary className="header-menu">

                <Menu.Item name='我的' active={activeItem === '我的'} onClick={this.handleItemClick}/>
                <Menu.Item
                    name='历史记录'
                    active={activeItem === '历史记录'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='团队'
                    active={activeItem === '团队'}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item
                        name='设置'
                        active={activeItem === 'logout'}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        )
    }

}