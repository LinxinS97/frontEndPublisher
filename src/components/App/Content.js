import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import CreateProject from './Content/CreateProject';
import ManageProject from './Content/ManageProject';
import PublicFile from './Content/PublicFile';
import Readme from './Content/Readme';

const { Content } = Layout;

class AppContent extends Component {
    render() {
        return (
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <Route exact path="/" component={ ManageProject }/>
                <Route path="/CreateProject" component={ CreateProject }/>
                <Route path="/ManageProject" component={ ManageProject }/>
                <Route path="/PublicFile" component={ PublicFile }/>
                <Route path="/Readme" component={ Readme }/>
            </Content>
        )
    }
}
export default AppContent;