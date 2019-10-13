import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import actions from 'Source/actions'
import { Link, Redirect } from 'react-router-dom'
import {
  Menu, Icon, Tabs,
  message, Form, Input,
  Button, Checkbox, Modal
} from 'antd';
const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}
class PCResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: props.login.login,
      status: props.login.status,
    };
  }
  componentWillReceiveProps = (nextProps) => {
    this.setState({
      login: nextProps.login.login,
      status: nextProps.login.status
    })
    console.log('next:'+nextProps.login.status)
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        var userInfo = {
          userAccount: values.username,
          userPassword: values.password,
          userConfirm:values.confirm
        }
        if(userInfo.userPassword!==userInfo.userConfirm)
        {
            alert('資料輸入錯誤')
            return
        }
        //console.log('info'+JSON.stringify(userInfo))
        this.props.dispatch(actions.login.resetPassword(userInfo))
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    if (this.state.status == 'reset success') {
        alert('密碼重置成功')
      this.props.dispatch(actions.login.initialStatus())
      return <Redirect to={'/login'} />
    }
    if (this.state.status == 'reset error') {
      alert('密碼重置失敗')
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
            {getFieldDecorator('confirm', {
              rules: [{ required: true, message: 'Please confirm your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Confirm"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Submit
                     </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
export default PCResetPassword = Form.create({})(connect(mapStateToProps)(PCResetPassword));

