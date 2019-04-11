import React from 'react';
import {Layout, Menu} from 'antd';
import NavHeaderStyles from '../style/NavHeader.scss'

const Header = Layout.Header


export default class NavHeader extends React.Component {

  render (){
    return (
      <Header className={NavHeaderStyles["nav-header"]}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '40px' }}
        >
          <Menu.Item key="1">文档库</Menu.Item>
          <Menu.Item key="2">历史记录</Menu.Item>
          <Menu.Item key="3">成员管理</Menu.Item>
        </Menu>
      </Header>
    )
  }
}

