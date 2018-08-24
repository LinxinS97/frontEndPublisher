import * as React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import '../css/Aside.css'

const AppDefinition = {
  appTitle: 'Fabric - React',
  examplePages: [
    {
      links: [
        {
          key: 'projectList',
          name: '项目列表',
          icon: 'AllApps'
        },
        {
          key: 'publicFile',
          name: '公共图片管理',
          icon: 'Diagnostic'
        },
        {
          key: 'CDN',
          name: 'CDN公共库',
          icon: 'TestAutoSolid'
        }
      ]
    },
  ]
};

export class Aside extends React.Component {

  // 以后有需要的时候可以进行样式定制
  _onRenderLink = (link) => {
    return (
      <Link to={'/' + link.key}>
        <span key={1} className="Nav-linkText">
          { link.name }
        </span>
      </Link>
    )
  }
  render() {
    return <Nav groups={AppDefinition.examplePages} onRenderLink={this._onRenderLink} className="leftPane"/>;
  }
}