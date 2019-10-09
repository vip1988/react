import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import actions from 'Source/actions'
import { Link, Redirect } from 'react-router-dom'
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';
import { compose } from '../../../../../Library/Caches/typescript/3.6/node_modules/redux'
const config = require('config')
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}
class PCRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            login:props.login.login,
            status:props.login.status,
            userLogin:'false'
        };
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            login:nextProps.login.login,
            status:nextProps.login.status
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                var data={
                    userAccount:values.account,
                    userPassword:values.password,
                    userConfirm:values.confirm,
                    userEmail:values.email,
                    userPhoneNumber:values.phone,
                    userLogin:this.state.userLogin
                }
                this.props.dispatch(actions.login.registerCreate(data))
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };


    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 20 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 20 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 20,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        console.log('status:'+this.state.status)
        if(this.state.status==='success')
        {
            alert('註冊成功')
            this.props.dispatch(actions.login.initialStatus())   
            //回首頁
           return <Redirect to={'/login'} />
        }
        if (this.state.status=='error')
        {
            alert('帳號已經存在')
            this.props.dispatch(actions.login.initialStatus())   
        }
        return (
            <div className='register'>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item
                        label={
                            <span>
                                Account&nbsp;
                  <Tooltip title="What do you want others to call you?">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        }
                    >
                        {getFieldDecorator('account', {
                            rules: [{ required: true, message: 'Please input your userAccount!', whitespace: true }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Password" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                            ],
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item label="Confirm Password" hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                            ],
                        })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                    </Form.Item>


                    <Form.Item label="Phone Number">
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please input your phone number!' }],
                        })(<Input style={{ width: '100%' }} />)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
              </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
export default PCRegister = Form.create({ name: 'register' })(connect(mapStateToProps)(PCRegister));

