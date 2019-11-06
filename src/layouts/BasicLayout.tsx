import React from 'react';
import 'antd/dist/antd.css';
import styles from './index.css';
import { Layout } from 'antd';


import NavHeader from '@/components/layout/NavHeader.tsx';
import NavMenu from '@/components/layout/NavMenu.tsx';
import NavBreadcrumb from '@/components/layout/NavBreadcrumb.tsx';

const Content = Layout.Content;

class Main extends React.Component<any> {

  render() {
    const {children} = this.props;
    console.log(children);
    return (
      <Layout className={styles['main-page']}>
        <NavHeader/>
        <Layout>
          <NavMenu/>
          <Layout style={{padding: '0 24px 24px'}}>
            <NavBreadcrumb/>

            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Main

