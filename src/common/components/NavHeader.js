import React from 'react';
import {Layout, Menu} from 'antd';
import NavHeaderStyles from '../style/NavHeader.scss';
import router from 'umi/router';


const Header = Layout.Header;


export default class NavHeader extends React.Component {


  toPage(prop){
    console.log(prop);
    if(prop.key === '/main/doc-edit') {
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
          defaultSelectedKeys={['/main/doc-edit']}
          style={{ lineHeight: '40px' }}
          onClick={this.toPage}
        >
          <Menu.Item key="/main/doc-edit">文档库</Menu.Item>
          <Menu.Item key="/main/doc-history">历史记录</Menu.Item>
          <Menu.Item key="/main/doc-member">成员管理</Menu.Item>
        </Menu>
      </Header>
    )
  }
}

