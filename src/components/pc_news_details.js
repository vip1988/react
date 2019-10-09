import React from 'react'
import { Card } from 'antd';
import '../../node_modules/antd/dist/antd.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Row, Col,BackTop} from 'antd';
import actions from 'Source/actions'
import PCFooter from 'Source/Components/pc_footer.js'
import PCHeader from 'Source/Components/pc_header.js'
import NewsImageBlock from 'Source/Components/pc_news_image_block.js'
import CommomComments from 'Source/Components/common_comments.js'
const config = require('config')
const mapStateToProps = (state) => {
    return {
        news: state.news
    }
}
class PCNewsDetails extends React.Component {
    constructor(props) {

        super(props);
        {
            this.state = {
                article: props.news.article
            }
        }
    }
    componentWillMount() {
        console.log('id:' + this.props.match.params.id)
        if (this.props.match.params.id) {
            this.props.dispatch(actions.news.getArticle(this.props.match.params.id))
        }
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            article: nextProps.news.article
        })
        this.props.dispatch(actions.news.getArticle(this.props.match.params.id))
    }

    render() {
        var __html;
        var imagePath;
        var title;
        var updated;
        if (this.state.article != null) {
            __html = this.state.article.content;
            imagePath = this.state.article.imagePath;
            title = this.state.article.title;
            updated = this.state.article.updated;
            document.title = title + '-React News';

        }
        return (
            //this.createMarkup(this.state.news.article)
            <div>
                <PCHeader/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className='container'>
                        <div className='detailTitle'>
                            <h1>{title}</h1>
                        </div>
                        <p />
                        <span>日期：{updated}</span>
                        <img src={imagePath} width='100%' height='400px' />
                        <div className='articleContainer' dangerouslySetInnerHTML={{ __html }}></div>
                        <hr/>
                        <CommomComments article_id={this.props.match.params.id} article_title={title}/>
                    </Col>
                    <Col span={6}>
                    <NewsImageBlock  counts={10} type='internal' width='100%' cardTitle='新聞推薦' imageWidth='122px' />
                    </Col>        
                    <Col span={2}></Col>
                </Row>
                <PCFooter/>
                <BackTop/>
            </div>

        )
    }

}
export default connect(mapStateToProps)(PCNewsDetails)