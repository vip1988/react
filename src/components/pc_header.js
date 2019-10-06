import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import Logo from 'Source/images/news.png'
import '../../node_modules/antd/dist/antd.css';
import {
    Menu, Icon, Tabs,
    message, Form, Input,
    Button, CheckBox, Modal
} from 'antd';
export default class PCHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


            currentKey: '',
            modalVisible: false,
            action: 'login',
            hasLogined: true,
            userNickName: '',
            userid: 0


        };
    };
    setModalVisible(value) {
        this.setState({ modalVisible: value });
    };

    handleClick(e) {

        if (e.key = 'register') {
            this.setState({ currentKey: 'register' });
            this.setModalVisible(true);
        }
        else {
            {
                this.setState({ currentKey: e.key });
            }
        }

    }
    render() {

        //let { getFieldProps } = this.props.form;
        var userShow = this.state.hasLogined
            ?

            <Menu.Item key='logout' className='register'>
                <Link to='userCenter'>
                    <Button key='primary' htmlType='button'>個人中心</Button>
                </Link>
                &nbsp;&nbsp;
                    <Button key='ghost' htmlType='button'>登出</Button>
            </Menu.Item>

            :
            <Menu.Item key='register' className='register'>
                <Link to='login'><Icon type="appstore" />註冊/登入</Link>
            </Menu.Item>

            ;
        return (
            <div>
                <header>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={4}>
                            <a href='/' className='logo'>
                                <img src={Logo} alt='logo' />
                                <span>ReactNews</span>
                            </a>
                        </Col>
                        <Col span={16}>
                            <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.currentKey]}>
                                <Menu.Item key='top'>
                                    <Icon type="appstore" />頭條
                                </Menu.Item>
                                <Menu.Item key='social'>
                                    <Icon type="appstore" />社會
                                </Menu.Item>
                                <Menu.Item key='internal'>
                                    <Icon type="appstore" />國內
                                </Menu.Item>
                                <Menu.Item key='international'>
                                    <Icon type="appstore" />國際
                                </Menu.Item>
                                <Menu.Item key='technology'>
                                    <Icon type="appstore" />科技
                                </Menu.Item>
                                <Menu.Item key='sport'>
                                    <Icon type="appstore" />體育
                                </Menu.Item>
                                <Menu.Item key='fashion'>
                                    <Icon type="appstore" />時尚
                                </Menu.Item>
                                <Menu.Item key='entertainment'>
                                    <Icon type="appstore" />娛樂
                                </Menu.Item>
                                {userShow}
                            </Menu>
                        </Col>
                        <Col span={2}></Col>
                    </Row>


                </header>
            </div>
        )

    }

}