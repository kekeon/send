import { Breadcrumb } from 'antd';
import React from 'react';


export default class NavBreadcrumb extends React.Component {

  render() {
    return (
      <Breadcrumb style={{margin: '16px 0'}}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
