import React from 'react'
import { Card } from 'antd';
import { Row, Col } from 'antd';
import '../../node_modules/antd/dist/antd.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from 'Source/actions'
import imagePath1 from 'Source/images/lative.jpg'
import imagePath2 from 'Source/images/levis.jpg'
import ReactPlayer from 'react-player';
const config = require('config')
const mapStateToProps = (state) => {
    return {
        news: state.news
    }
}
class PCNewsVideoBlock extends React.Component {
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

            <div className='videoBlock'>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <Card title={this.props.cardTitle} bordered={true} style={{ width: this.props.width, height: this.props.height }} bodyStyle={{ height: '330px' }} >
                        <div>
                        <ReactPlayer
                                url='https://www.youtube.com/watch?v=dwFU7xRbAIc'
                                playing={false}
                                volume={0.8}
                                width="100%"
                                height="40%"
                            />
                            </div>
                            <div padding-top='20px'> 
                            <ReactPlayer
                                url='https://www.youtube.com/watch?v=ZrB7EdfPBJU'
                                playing={false}
                                volume={0.8}
                                width="100%"
                                height="40%"
                            />
                            </div>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <div className='mainVideo'>
                            <ReactPlayer
                                url='https://www.youtube.com/watch?v=153G7QEBK1I'
                                playing={false}
                                volume={0.8}
                                width="100%"
                                heght="100%"
                            />
                        </div>
                    </Col>
                    <Col span={4}>
                        <div>
                            <a href="https://www.lativ.com.tw/"> <img alt='error' src={imagePath1} /></a>
                            <a href="https://www.levis.com.tw/?gclid=EAIaIQobChMI34z5mMiA5QIV1KmWCh3i8QSSEAAYASAAEgLmM_D_BwE"> <img alt='error' src={imagePath2} /></a>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }

}
export default connect(mapStateToProps)(PCNewsVideoBlock)