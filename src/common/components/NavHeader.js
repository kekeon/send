import React from 'react';
import {Layout, Menu} from 'antd';
import NavHeaderStyles from '../style/NavHeader.scss';
import router from 'umi/router';



const Header = Layout.Header;


export default class NavHeader extends React.Component {


  toPage(prop){
    console.log(prop);
    if(prop.key === '/doc/edit') {
      router.push(prop.key)
    }
  }

  render (){
    return (
      <Header className={NavHeaderStyles["nav-header"]}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['/doc/edit']}
          style={{ lineHeight: '40px' }}
          onClick={this.toPage}
        >
          <Menu.Item key="/doc/edit">文档库</Menu.Item>
          <Menu.Item key="/doc/history">历史记录</Menu.Item>
          <Menu.Item key="/doc/member">成员管理</Menu.Item>
        </Menu>
      </Header>
    )
  }
}

