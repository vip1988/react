import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import actions from 'Source/actions'
import { Link } from 'react-router-dom'
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
class Entry extends React.Component {
    render() {
        var linkStyle = {
            color: 'black',
            cursor: 'pointer'
        }

        return (
            <div className="one column row">
                <div className="column">
                    <Link to='/details' style={linkStyle}>
                        <h1>{this.props.userAccount}</h1>
                        <p>{this.props.userPassword}</p>
                    </Link>
                </div>
            </div>
        );
    }
}
class PCLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginInfo: props.login.loginInfo

        };
    }
    componentWillMount = () => {
        this.props.dispatch(actions.login.getLoginInfo())


    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            loginInfo: nextProps.login.loginInfo
        })

    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {

                var userInfo = {
                    userAccount: values.username,
                    userPassword: values.password
                }
               
                this.props.dispatch(actions.login.postLoginInfo(userInfo))
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        var entry = this.state.loginInfo.map((value, index) => {
            if (value) {
                return (
                    <Entry
                        id={value._id}
                        userAccount={value.userAccount}
                        userPassword={value.userPassword}
                        key={index}
                    />
                )
            }
        })

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
                        <a className="login-form-forgot" href="">
                            Forgot password
                    </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                     </Button>
                        Or <a href="/">register now!</a>
                    </Form.Item>
                </Form>
                <div className="ui vertically divided grid">
                    {entry}
                </div>
            </div>


        )
    }
}


export default PCLogin = Form.create({})(connect(mapStateToProps)(PCLogin));

