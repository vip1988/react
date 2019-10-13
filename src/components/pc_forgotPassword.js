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
class PCForgetPassword extends React.Component {
  constructor(props) {
    super(props);{

      this.state = {
        login: props.login.login,
        status: props.login.status,
        userEmail:'',
        userLogin: false
  
      };

    }
   
  }
  componentWillReceiveProps = (nextProps) => {
    this.setState({
      login: nextProps.login.login,
      status: nextProps.login.status,
      userEmail:nextProps.login.login.userEmail
    })
    console.log('next:'+nextProps.login.login)
    console.log('next:'+nextProps.login.login.userEmail)
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        var userInfo = {
          userEmail: values.usermail,
          userAccount: values.username,
          userPassword: values.password
        }
        //console.log('info'+JSON.stringify(userInfo))
        this.props.dispatch(actions.login.checkForgotPassword(userInfo))
      }
    });
  };
  sendMail(){
    
    
    
    alert(JSON.stringify(this.state.login))
    
    alert(typeof(this.state.login.userEmail))


 localStorage.setItem('token','5d9e0ec05bc4d13ec5818b6e');
//  var info ={
//   token:'5d9e0ec05bc4d13ec5818b6e',
//   userEmail:'memoryll2002@gmail.com'
//  }
    
 var info ={
  token:this.state.login._id,
  userEmail:this.state.login.userEmail
 }
 alert(JSON.stringify(info))
   // this.props.dispatch(actions.login.sendMail(info)) 
  }
  render() {
    
    const { getFieldDecorator } = this.props.form;
    if (this.state.status == 'forgot success') {
      this.props.dispatch(actions.login.initialStatus())
      this.sendMail();
    }
    if (this.state.status == 'forgot error') {
      alert('查無此信箱')
      this.props.dispatch(actions.login.initialStatus())
    }
    if (this.state.status == 'send success') {
      alert('郵件發送成功')
      this.props.dispatch(actions.login.initialStatus())
      return <Redirect to={'/'} />
    }
    if(this.state.status == 'send error'){
      alert('郵件發送失敗')
      this.props.dispatch(actions.login.initialStatus())
    }
    return (
      <div className='login'>

        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('usermail', {
              rules: [{ required: true, message: 'Please input your usermail!' }],
            })(
              <Input
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Usermail"
              />,
            )}
          </Form.Item>
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
            <Button type="primary" htmlType="submit" className="login-form-button">
              Submit
                     </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
export default PCForgetPassword = Form.create({})(connect(mapStateToProps)(PCForgetPassword));

