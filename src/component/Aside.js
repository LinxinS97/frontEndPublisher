import * as React from 'react';
import { withRouter } from 'react-router';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import '../css/Aside.css';

const AppDefinition = {
  appTitle: 'Fabric - React',
  examplePages: [
    {
      links: [
        {
            key: 'projectList',
            name: '项目列表',
            icon: 'AllApps',
        },
        {
            key: 'publicFile',
            name: '公共图片管理',
            icon: 'Diagnostic',
        },
        {
            key: 'CDN',
            name: 'CDN公共库',
            icon: 'TestAutoSolid',
        },
        {
            key:'guide',
            name: '使用指南',
            icon: 'UnknownSolid'
        }
      ]
    },
  ]
};

class Aside extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: 'projectList'
        }
    }

    _onRenderLink = (link) => {
        return (
            <span>
                <span key={1} className="Nav-linkText">
                    { link.name }
                </span>
            </span>
        )
    }

    _onLinkClick = (html, item) => {
        this.setState({
            selectedKey: item.key
        });
        // 添加进历史，跳转
        this.props.history.push('/' + item.key);
        
    }

    render() {
        return <Nav 
            groups={AppDefinition.examplePages} 
            onRenderLink={this._onRenderLink} 
            onLinkClick={this._onLinkClick}
            className="leftPane"
            selectedKey={this.state.selectedKey}
        />;
    }
}
// 配置动态路由
const AsideWithRouter = withRouter(Aside);
export default AsideWithRouter;
