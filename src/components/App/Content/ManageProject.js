import React, { Component } from 'react';
import { Input, Icon, Button, Table } from 'antd';
import '../../../css/ManageProject.css'

const data = [{
    key: '1',
    name: 'front_end_publisher',
    state: '1',
    action: '1'
}]

class ManageProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
        };
    }
    handleSearch = (selectedKeys, confirm) => () => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    }
    handleReset = clearFilters => () => {
        clearFilters();
        this.setState({ searchText: '' });
    }
    render() {
        const columns = [{
            title: '项目名称',
            dataIndex: 'name',
            key: 'name',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div className="custom-filter-dropdown">
                    <Input
                        ref={ele => this.searchInput = ele}
                        placeholder="项目名称"
                        value={selectedKeys[0]}
                        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={this.handleSearch(selectedKeys, confirm)}
                    />
                    <Button type="primary" onclick={this.handleSearch(selectedKeys, confirm)}>查找</Button>
                    <Button onClick={this.handleReset(clearFilters)}>重置</Button>
                </div>
            ),
            filterIcon: filtered => <Icon type="smile-o" style={{ color: filtered ? '#108ee9' : '#aaa' }}/>,
            onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: visible => {
                if (visible) {
                    setTimeout(() => {
                        this.searchInput.focus();
                    });
                }
            },
            render: text => {
                const { searchText } = this.state;
                return searchText ? (
                    <span>
                        {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
                            fragment.toLowerCase() === searchText.toLowerCase()
                            ? <span key={i} className="highlight">{fragment}</span> : fragment // eslint-disable-line
                        ))}
                    </span>
                ) : text;
            },
        }, {
            title: '状态',
            dataIndex: 'state',
            key: 'state'
        }, {
            title: '操作',
            dataIndex: 'action',
            key: 'action'
        }];
        return (
            <main>
                <h1>项目管理</h1>
                <Table columns={columns} dataSource={data} pagination="bottom" />
            </main>
        )
    }
}

export default ManageProject;