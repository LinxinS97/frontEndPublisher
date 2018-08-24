import * as React from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { BrowserRouter as Router } from 'react-router-dom';

import { Aside } from './component/Aside';
import { Header } from './component/Header';
import { Main } from './component/Main';


import './css/App.css';

export class App extends React.Component {
    render() {
        return (
            <Router>
                <Fabric className='Fabric-Container'>
                    <Header />
                    <Aside />
                    <Main />
                </Fabric>
            </Router>
        )
    }
}