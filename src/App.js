import * as React from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

import { NavFabric } from './component/Aside';
import { Header } from './component/Header';
import { Main } from './component/Main';

import './css/App.css';

export class App extends React.Component {
  render() {
    return (
      <Fabric className='Fabric-Container'>
        <Header />
        <NavFabric />
        <Main />
      </Fabric>
    )
  }
}