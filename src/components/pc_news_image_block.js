import React from 'react'
import { Card } from 'antd';
import { Row, Col } from 'antd';
import '../../node_modules/antd/dist/antd.css';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import actions from 'Source/actions'
const config = require('config')
const url ='http://localhost:3001/details/'
const mapStateToProps = (state) => {
    return {
        news: state.news
    }
}
class PCNewsImageBlock extends React.Component {
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
        const gridStyle = {
            width: '25%',
            textAlign: 'center',
        };

        const styleCard = {
            width: this.props.width
        }
        const styleImage = {
            display: 'block',
            width: this.props.imageWidth,
            height: '90px',
        }
        const styleH3 = {
            width: this.props.imageWidth,
            //處理空白字元 ....
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        }
        // <Link to={`details/${newsItem._id}`} target='_blank'>
        //console.log('state' + JSON.stringify(this.state.newsInfo))
        
       
        const newsList = this.state.newsInfo.length
            ?
            this.state.newsInfo.map((newsItem, index) => (
                <div key={index} className='imageBlock'>
                    
                    <Link to={`details/${newsItem._id}`} >
                        <div className='custom-image'>
                            <img alt='' style={styleImage} src={newsItem.imagePath} />
                        </div>
                        <div className='custom-card'>
                            <h3 style={styleH3}>{newsItem.title}</h3>
                        </div>
                    </Link>
                </div>

            ))
            :
            '沒有加載到任何新聞'


        return (

            <div className='topNewsImageBlock'>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Card title={this.props.cardTitle} bordered={true} style={{ width: this.props.width }}>
                            {newsList}
                        </Card>
                    </Col>

                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }

}
export default connect(mapStateToProps)(PCNewsImageBlock)