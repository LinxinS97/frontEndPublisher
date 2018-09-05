import * as React from 'react';
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb';
import { createListItems } from 'office-ui-fabric-react/lib/utilities/exampleData';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { DetailsList, buildColumns } from 'office-ui-fabric-react/lib/DetailsList';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import '../../css/component/ProjectList.css';

let _items;
const items = [
    { text: 'Files', key: 'Files', onClick: this._onBreadcrumbItemClicked },
    { text: 'This is folder 1', key: 'f1', onClick: this._onBreadcrumbItemClicked },
    { text: 'This is folder 2', key: 'f2', onClick: this._onBreadcrumbItemClicked, isCurrentItem: true }
]
const commandBarItems = [
    {
        key: 'newProject',
        text: '新建项目',
        iconProps: { iconName: 'Add' },
        // onClick: Fn
    },
    {
        key: 'modifyProject',
        text: '编辑项目',
        iconProps: { iconName: 'Settings' },
    }
]

export class ProjectList extends React.Component {

    constructor(props) {
        super(props);

        _items = _items || createListItems(8);

        this.state = {
          sortedItems: _items,
          columns: _buildColumns(),

          areNamesVisible: true,
          areIconsVisible: true
        };
    }
    
    render() {
        const { sortedItems, columns } = this.state;
        return (
            <span>
                <h2>项目列表</h2>
                <Breadcrumb
                    items={ items }
                    ariaLabel={'Website breadcrumb'}
                />
                <CommandBar
                    items={ commandBarItems }
                    ariaLabel={'Use left and right arrow keys to navigate between commands'}
                />
                <DetailsList
                    items={ sortedItems }
                    setKey="set"
                    columns={columns}
                    onRenderItemColumn={_renderItemColumn}
                    onColumnHeaderClick={this._onColumnClick}
                    onItemInvoked={this._onItemInvoked}
                    onColumnHeaderContextMenu={this._onColumnHeaderContextMenu}
                />
            </span>
            
        );
    }

    _onBreadcrumbItemClicked(item) {
        console.log(item);
    }

    // 点击列进行排序
    _onColumnClick = (event, column) => {
        const { columns } = this.state;
        let { sortedItems } = this.state;
        let isSortedDescending = column.isSortedDescending;

        // 如果这个column已经排序了，跳过它
        if (column.isSorted) {
            isSortedDescending = !isSortedDescending;
        }

        // 排序
        sortedItems = sortedItems.concat([]).sort((a, b) => {
            const firstValue = a[column.fieldName || ''];
            const secondValue = b[column.fieldName || ''];
        
            if (isSortedDescending) {
                return firstValue > secondValue ? -1 : 1;
            } else {
                return firstValue > secondValue ? 1 : -1;
            }
        });

        // 重置item和column的匹配状态
        this.setState({
        sortedItems: sortedItems,
            columns: columns.map(col => {
                col.isSorted = col.key === column.key;

                if (col.isSorted) {
                    col.isSortedDescending = isSortedDescending;
                }

                return col;
            })
        });
    };
    
    _onColumnHeaderContextMenu(column, ev) {
        console.log(`column ${column.key} contextmenu opened.`);
    }
    
    _onItemInvoked(item, index) {
        alert(`Item ${item.name} at index ${index} has been invoked.`);
    }
}
// ms的创造表头方法
function _buildColumns() {
    const columns = buildColumns(_items);

    const thumbnailColumn = columns.filter(column => column.name === 'thumbnail')[0];

    // 特殊的列单独定义
    thumbnailColumn.name = '';
    thumbnailColumn.maxWidth = 50;
    return columns;
}

// 列渲染
function _renderItemColumn(item, index, column) {
    const fieldContent = item[column.fieldName || ''];
  
    switch (column.key) {
        case 'thumbnail':
            return <Image src={fieldContent} width={50} height={50} imageFit={ImageFit.cover} />;
    
        case 'name':
            return <Link href="#">{fieldContent}</Link>;
    
        case 'color':
            return (
            <span data-selection-disabled={true} style={{ color: fieldContent, height: '100%', display: 'block' }}>
                {fieldContent}
            </span>
            );
    
        default:
            return <span>{fieldContent}</span>;
    }
}