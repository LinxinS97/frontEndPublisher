import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import AppHeader from './App/Header';
import AppAside from './App/Aside';
import AppContent from './App/Content';
import '../css/App.css';

const { Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
    <Layout className="main">
        <AppHeader />
        <Content style={{ padding: '0 50px', height: '100%' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout style={{ padding: '24px 0', background: '#fff', minHeight: '600px', height: '95%' }}>
                <AppAside />
                <AppContent />
            </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            FrontEnd Publisher - Created by Stranger469 2018
        </Footer>
    </Layout>
    );
  }
}

export default App;
