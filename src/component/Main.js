import React from 'react'
import { Route } from 'react-router-dom';
import { ProjectList } from './main/ProjectList';
import { CDN } from './main/CDN';
import { PublicFile } from './main/PublicFile';
import '../css/Main.css'

export class Main extends React.Component {
    _onBreadcrumbItemClicked = (ev, item) => {
        console.log(`Breadcrumb item with key ${ item.key } has been clicked`);
    }
    render() {
        return (
            <main>
                <Route exact path="/" component={ ProjectList }/>
                <Route path="/projectList" component={ ProjectList }/>
                <Route path="/cdn" component={ CDN }/>
                <Route path="/publicFile" component={ PublicFile }/>
            </main>
        )
    }
}
