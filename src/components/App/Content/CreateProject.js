import React, { Component } from 'react';
import { Form, Input, Icon, Row, Col, Select, Button } from 'antd';
import { DATA_URL } from '../../../data';
import '../../../css/CreateProject.css'
const FormItem = Form.Item;
const Option = Select.Option;

class CreateProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            url: '',
            type: 0,
            script: 0
        }
    }
    _onInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    _onTypeSelectChange = (value) => {
        this.setState({
            type: value
        })
    }
    _onScriptSelectChange = (value) => {
        this.setState({
            script: value
        });
    }
    _handleSubmit = async () => {
        const response = await fetch(DATA_URL.clone, {
            body: JSON.stringify(this.state),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        });
        console.log(response);
        return false;
    }
    render() {
        return (
            <main>
                <h1>新建项目</h1>
                <Form className="create-form" onSubmit={ this._handleSubmit }>
                    <Row gutter={24}>
                        <Col span={12} key='1'>
                            <FormItem label='项目名称'>
                                <Input 
                                    id="name"
                                    value={ this.state.name } 
                                    onChange={ this._onInputChange }
                                />
                            </FormItem>
                        </Col>
                        <Col span={12} key='2'>
                            <FormItem label='git地址'>
                                <Input 
                                    id="url"
                                    value={ this.state.url } 
                                    onChange={ this._onInputChange }
                                />
                            </FormItem>
                        </Col>
                        <Col span={12} key='3'>
                            <FormItem label='项目类型'>
                                <Select 
                                    id="script"
                                    onChange={ this._onTypeSelectChange }
                                    defaultValue="0"
                                >
                                    <Option value="0">前端项目</Option>
                                    <Option value="1">node项目（制作中）</Option>
                                </Select>
                            </FormItem>
                        </Col>
                        <Col span={12} key='4'>
                            <FormItem label='编译脚本'>
                                <Select 
                                    id="script"
                                    onChange={ this._onScriptSelectChange }
                                    defaultValue="0"
                                >
                                    <Option value="0">yarn run build</Option>
                                    <Option value="1">npm run build</Option>
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                    <FormItem>
                        <Button type="primary" htmlType="submit">
                            提交发布
                        </Button>
                    </FormItem>
                </Form>
            </main>
        )
    }
}

export default CreateProject;