import React from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class HomeCp extends React.Component {

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        const { activeItem } = this.state

        return (

            <Menu secondary className="header-menu">

                <style>{`
     .ui.secondary.header-menu {
     padding:0 15px;
     background: #00b5ad;
     margin:0;
     height:45px;
     line-height:45px;
     }

     .ui.secondary.header-menu a {
     color: #f1f1f1;
     }
     .ui.secondary.header-menu a::selection {
     color: #f7bd13eb;
     }

     .ui.secondary.header-menu .active.item {
     color: #ffcc00;
     }
    `}</style>

                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        )
    }

}