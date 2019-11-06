import { Layout, Menu } from 'antd';
import React from 'react';
import Link from 'umi/link';
import NavHeaderStyles from './style/NavHeader.less';

const Header = Layout.Header;


export default class NavHeader extends React.Component {


  toPage(prop: any) {
    console.log(prop);
  }

  render() {
    return (
      <Header className={NavHeaderStyles['nav-header']}>
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['/doc/edit']}
          style={{lineHeight: '40px'}}
          onClick={this.toPage}
        >
          <Menu.Item key="/doc/edit">
            <Link to="/doc/edit">文档库</Link>
          </Menu.Item>
          <Menu.Item key="/doc/history">
            <Link to="/doc/history">历史记录</Link>
          </Menu.Item>
          <Menu.Item key="/doc/member">
            <Link to="/doc/member">成员管理</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}
