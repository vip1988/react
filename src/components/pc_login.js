import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import actions from 'Source/actions'
import { Link ,Redirect} from 'react-router-dom'
import {
    Menu, Icon, Tabs,
    message, Form, Input,
    Button, Checkbox, Modal
} from 'antd';
const config = require('config')

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}
class PCLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status:props.login.status,
            userLogin:false

        };
    }
    // componentWillMount = () => {
    //     this.props.dispatch(actions.login.getLoginInfo())
    // }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            status:nextProps.login.status
        })
    }
    checkLogin(userInfo){

        this.props.dispatch(actions.login.checkLoginInfo(userInfo))   

    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {

                var userInfo = {
                    userAccount: values.username,
                    userPassword: values.password,
                    userLogin:this.state.userLogin
                }
                this.checkLogin(userInfo)
                
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        if(this.state.status=='userAccount exits')
        {
            alert('userAccount exits')
        }

        if(this.state.status=='check success')
        {
            alert('登錄成功')
            //回首頁
           return <Redirect to={'/'} />
        }
        if (this.state.status=='check error')
        {
            alert('帳號密碼有誤')
            this.props.dispatch(actions.login.initialStatus())   
        }
        return (
            <div className='login'>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        <a className="login-form-forgot" href="#/forgotPassword">
                            Forgot password
                    </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                     </Button>
                        Or <a href="#/register">register now!</a>
                    </Form.Item>
                </Form>
                <div className="ui vertically divided grid">
                </div>
            </div>


        )
    }
}


export default PCLogin = Form.create({})(connect(mapStateToProps)(PCLogin));

