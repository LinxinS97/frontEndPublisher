import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import '../css/Aside.css'

const AppDefinition = {
  appTitle: 'Fabric - React',
  examplePages: [
    {
      links: [
        {
          key: 'ActivityItem',
          name: '项目列表',
          icon: 'AllApps',
          url: ''
        },
        {
          key: 'Breadcrumb',
          name: '公共图片管理',
          icon: 'Diagnostic',
          url: ''
        },
        {
          key: 'Button',
          name: 'CDN公共库',
          icon: 'TestAutoSolid',
          url: ''
        }
      ]
    },
  ]
};

export class NavFabric extends React.Component {

  // 以后有需要的时候可以进行样式定制
  _onRenderLink = (link) => {
    return (
      <span>
        <span key={1} className="Nav-linkText">
          { link.name }
        </span>
      </span>
    )
  }
  render() {
    return <Nav groups={AppDefinition.examplePages} onRenderLink={this._onRenderLink} className="leftPane"/>;
  }
}