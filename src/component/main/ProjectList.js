import * as React from 'react';
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb';
import '../../css/component/ProjectList.css';

export class ProjectList extends React.Component {
    _onBreadcrumbItemClicked(item) {
        console.log(item);
    }
    render() {
        return(
            <span>
                <h2>项目列表</h2>
                <Breadcrumb
                items={[
                    { text: 'Files', key: 'Files', onClick: this._onBreadcrumbItemClicked },
                    { text: 'This is folder 1', key: 'f1', onClick: this._onBreadcrumbItemClicked },
                    { text: 'This is folder 2', key: 'f2', onClick: this._onBreadcrumbItemClicked, isCurrentItem: true }
                ]}
                ariaLabel={'Website breadcrumb'}
                />
            </span>
        )
    }
}