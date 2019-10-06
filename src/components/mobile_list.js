import React from 'react'
import { Card } from 'antd';
import '../../node_modules/antd/dist/antd.css';
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import { List, Avatar } from 'antd';
import { connect } from 'react-redux'
import actions from 'Source/actions'
const config = require('config')
const mapStateToProps = (state) => {
    return {
        news: state.news
    }
}
class MobileList extends React.Component {
    constructor(props) {

        super(props);
        {
            this.state = {
                newsInfo: props.news.newsInfo
            }
        }
    }
    componentWillMount() {

        this.props.dispatch(actions.news.getNewsCounts(this.props.counts))
        
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            newsInfo: nextProps.news.newsInfo
        })
    }
    render() {
        
        return (

            <div>
                <Row>
                    <Col span={24}>
                       
                        <List
                            itemLayout="horizontal"
                            dataSource={this.state.newsInfo}
                            renderItem={item => (
                                <Link to={`mobile_details/${item._id}`}>
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar  shape="square" size = {100} src={item.imagePath} width='100px' height='100px'/>}
                                        title={<a href={`http://localhost:3001/details/${item._id}`}>{item.title}</a>}
                                        description={`日期：${item.updated}`} 
                                    />
                                </List.Item>
                                </Link>
                            )}
                        />
                      
                    </Col>
                </Row>
            </div>
        )
    }

}
export default connect(mapStateToProps)(MobileList)