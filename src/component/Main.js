import React from 'react'
import { Route } from 'react-router-dom';
import { ProjectList } from './main/ProjectList';
import { CDN } from './main/CDN';
import { PublicFile } from './main/PublicFile';
import { Guide } from './main/guide';
import '../css/Main.css';

export class Main extends React.Component {
    render() {
        return (
            <main className="ms-fadeIn100">
                <Route exact path="/" component={ ProjectList }/>
                <Route path="/projectList" component={ ProjectList }/>
                <Route path="/cdn" component={ CDN }/>
                <Route path="/publicFile" component={ PublicFile }/>
                <Route path="/guide" component={ Guide }/>
            </main>
        )
    }
}
