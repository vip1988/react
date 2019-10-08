import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import actions from 'Source/actions'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import '../../node_modules/antd/dist/antd.css';
import {
    Menu, Icon, Tabs,
    message, Form, Input,
    Button, CheckBox, Modal,
    notification
} from 'antd';
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => {
    
    return {
        comment: state.comment,
        news: state.news,
        login:state.login
    }
   
}
class CommonComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            news: props.news,
            login:props.login.loginInfo

        };
    };
    componentDidMount() {
        this.props.dispatch(actions.comment.getCommentList())

    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            comment: nextProps.comment.comment
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                var commentInfo = {
                    userAccount: this.state.login.userAccount,
                    comment: values.comment,
                    article_id:this.props.article_id
                }
                this.props.dispatch(actions.comment.postComment(commentInfo))
            }
            this.componentDidMount()
        });
    };
    addUserCollection() {
        
        const collectionInfo={
            userAccount:this.state.login.userAccount,
            article_id:this.props.article_id,
            article_title:this.props.article_title
        }
        console.log("co:"+ JSON.stringify(collectionInfo))
        this.props.dispatch(actions.collection.postCollection(collectionInfo))
        
        notification.open({
            message: 'ReactNews提醒',
            description:
                '收藏成功'
        });
    }
    render() {
        let { getFieldDecorator } = this.props.form;
        const { comment } = this.state;
       
        
        const commentList = comment.length ?
            comment.map((comment, index) => (
                <Card key={index} title={comment.userAccount} extra={<a href='#'>發佈於 {comment.updated}</a>}>
                    <p>{comment.comment}</p>
                </Card>
            ))
            :
            '沒有任何評論'
        return (
            <div className='comment'>
                <Row type="flex" align-items='center'>
                    <Col span={24}>
                        {commentList}
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item label='您的評論:'>
                                {getFieldDecorator('comment', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '請輸入評論',
                                        },
                                    ],
                                })(<input type='textarea' placeholder='我有話要說' />)}
                            </Form.Item>
                            <button class="ui inverted blue button" type="submit">提交</button>
                            &nbsp;
                           <button class="ui inverted blue button" type="button" onClick={this.addUserCollection.bind(this)}>收藏</button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )

    }

}
export default CommonComments = Form.create({})(connect(mapStateToProps)(CommonComments));
// <Button type="primary" htmlType="submit">提交</Button>