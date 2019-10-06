import React from 'react'
import { Card } from 'antd';
import '../../node_modules/antd/dist/antd.css';
import {Link} from 'react-router-dom'
import { connect  } from 'react-redux'
import actions from 'Source/actions'
const config = require('config')
const mapStateToProps = (state) => {
    return {
        news: state.news
    }
}
class PCNewsBlock extends React.Component {
    constructor(props) {

        super(props);
        {
            this.state = {
                newsInfo:props.news.newsInfo
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
        
        // console.log('state'+JSON.stringify(this.state.newsInfo))
        const newsList = this.state.newsInfo.length
            ?
            this.state.newsInfo.map((newsItem, index) => (
                
                <li key={index}>
                     <Link to={`details/${newsItem._id}`}>
                        {newsItem.title}
                    </Link>
                </li>
            ))
            :
            '沒有加載到任何新聞'
            
           
        return (
            
            <div className='topNewsList'>
               
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }

}
export default connect(mapStateToProps)(PCNewsBlock)