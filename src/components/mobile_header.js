import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import '../../node_modules/antd/dist/antd.css';
import { Row, Col } from 'antd';
import Logo from 'Source/images/news.png'
import {
    Menu, Icon, Tabs,
    message, Form, Input,
    Button, Checkbox,Modal
} from 'antd';

const SubMenu = Menu.SubMenu;
const TabPane =Tabs.TabPane;
const FormItem = Form.Item;
const MenuItemGroup = Menu.ItemGroup;
class MobileHeader extends React.Component {
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
    setModalVisible(value){
        this.setState({modalVisible:value});
    };
    handleSubmit (e) {

        var formData = this.props.form.getFieldProps;
        console.log(formData);
            //     fetch(config.service.external_url + '/api/login/create', {
            //         method: 'post',
            //         headers: {
            //             'Accept': 'application/json',
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify({
            //             userAccount: userInfo.userAccount || undefined,
            //             userPassword: userInfo.userPassword || undefined
            //         })
            //     }).then(res => res.json())
            //         .then(res => console.log(res));
            // }
        }
    
    handleClick(e){
       console.log(e.key);
       console.log(this.state.modalVisible)
        if(e.key='register')
        {
            this.setState({currentKey:'register'});
            this.setModalVisible(true);
        }
        else
        {
            {
                this.setState({currentKey:e.key});
                
            }
        }

    }
    login(){
           this.setModalVisible(true)
    }
    render() {
        
        let { getFieldProps } = this.props.form;
        var userShow = this.state.hasLogined
            ?
            <Link to='mobile_userCenter'>
           <Icon type='inbox' /> 
            </Link> 
            :
                <Icon type="setting" onClick={this.login.bind(this)}/>
            ;
        return (
            <div className="mobileHeader">
                <header>
                <img src={Logo} alt='logo' />
                                <span>ReactNews</span>
                                {userShow}
                    <Modal title="用戶中心" wrapClassNane='vertical-center-modal' visible={this.state.modalVisible} onCancel={()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} okText="關閉">
                        <Tabs type='card'>
                            <TabPane tab='註冊' key='2'>
                                <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                    <FormItem label='帳戶'>
                                        <input placeholder='請輸入您的帳號'{...getFieldProps('r_userName')} />
                                    </FormItem>
                                    <FormItem label='密碼'>
                                        <input type='password' placeholder='請輸入您的密碼'{...getFieldProps('r_password')} />
                                    </FormItem>
                                    <FormItem label='確認密碼'>
                                        <input type='password' placeholder='請再次確認您的密碼'{...getFieldProps('r_confirmPassword')} />
                                    </FormItem>
                                    <Button type='primary' htmlType='submit'>註冊</Button>
                                </Form>
                            </TabPane>
                        </Tabs>
                    </Modal>
                </header>
            </div>
        )

    }

}
export default MobileHeader = Form.create({})(MobileHeader);
