import React, { Component } from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

class AppContent extends Component {
    render() {
        return (
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                Content
            </Content>
        )
    }
}
export default AppContent;