import React, { Component } from 'react';
import { Layout } from 'antd';
import { HashRouter as Router } from 'react-router-dom';
import AppHeader from './App/Header';
import AppAside from './App/Aside';
import AppContent from './App/Content';
import '../css/App.css';

const { Content, Footer } = Layout;

class App extends Component {
    render() {
        return (
            <Router>
                <Layout className="main">
                    <AppHeader />
                    <Content style={{ marginTop: '50px',padding: '0 50px', height: '100%' }}>
                        <Layout style={{ padding: '24px 0', background: '#fff', minHeight: '600px', height: '100%' }}>
                            <AppAside />
                            <AppContent />
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        FrontEnd Publisher 2018 - Created by Stranger469
                    </Footer>
                </Layout>
            </Router>
        );
    }
}

export default App;
