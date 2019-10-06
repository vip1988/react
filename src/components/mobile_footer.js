import React from "react";
import '../../node_modules/antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

export default class MobileFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className='mobileFooter'>
                <footer>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={20} className='mobile'>
                            &copy;&nbsp;2019 ReactNews. All Rights Reserved.
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                </footer>
            </div>
        )
    }
}

