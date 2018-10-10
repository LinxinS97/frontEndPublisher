import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header } = Layout;

class AppHeader extends Component {
    render() {
        return (
            <Header className="header">
                <div className="logo"><Icon type="cloud-upload" theme="outlined" />&nbsp;发布系统</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">新建项目</Menu.Item>
                </Menu>
            </Header>
        )
    }
}
export default AppHeader;