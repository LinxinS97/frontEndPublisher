import React, { Component } from 'react';
import { Form, Input, Icon, Row, Col } from 'antd';
import '../../../css/CreateProject.css'
const FormItem = Form.Item;

class CreateProject extends Component {
    render() {
        return (
            <div>
                <h1>新建项目</h1>
                <Form className="create-form">
                    <Row gutter={24}>
                        <Col span={12} key='1'>
                            <FormItem label='项目名称'>
                                <Input />
                            </FormItem>
                        </Col>
                        <Col span={12} key='2'>
                            <FormItem label='git地址'>
                                <Input />
                            </FormItem>
                        </Col>
                        <Col span={12} key='3'>
                            <FormItem label='项目类型'>
                                <Input />
                            </FormItem>
                        </Col>
                        <Col span={12} key='4'>
                            <FormItem label='编译脚本'>
                                <Input />
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default CreateProject;