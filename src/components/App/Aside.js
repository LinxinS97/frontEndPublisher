import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

class AppAside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: 'projectList'
        }
    }
    _onItemClick = (item) => {
        console.log(item.key);
        this.setState({
            selectedKey: item.key
        });
        this.props.history.push('/' + item.key);
    }
    render() {
        return (
            <Sider width={200} style={{ background: '#fff', overflow: 'hidden' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['manageProject']}
                    defaultOpenKeys={['sub1']}
                    onClick={ this._onItemClick }
                    style={{ height: '100%' }}
                >
                    <Menu.Item key="manageProject"><Icon type="inbox" theme="outlined" />项目管理</Menu.Item>
                    <Menu.Item key="createProject"><Icon type="folder-add" theme="outlined" />新建项目</Menu.Item>
                    <Menu.Item key="publicFile"><Icon type="folder-open" theme="outlined" />公共文件管理</Menu.Item>
                    <Menu.Item key="readme"><Icon type="info-circle" theme="outlined" />使用说明</Menu.Item>
                    {/* <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu> */}
                </Menu>
            </Sider>
        )
    }
}
const AppAsideWithRouter = withRouter(AppAside);
export default AppAsideWithRouter;