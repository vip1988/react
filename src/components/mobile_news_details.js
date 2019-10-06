import React from 'react'
import { Card } from 'antd';
import '../../node_modules/antd/dist/antd.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Row, Col, BackTop } from 'antd';
import actions from 'Source/actions'
import MobileHeader from 'Source/Components/mobile_header.js'
import MobileFooter from 'Source/Components/mobile_footer.js'
import CommomComments from 'Source/Components/common_comments.js'

const config = require('config')
const mapStateToProps = (state) => {
    return {
        news: state.news
    }
}
class MobileNewsDetails extends React.Component {
    constructor(props) {

        super(props);
        {
            this.state = {
                article: props.news.article
            }
        }
    }
    componentDidMount() {
        console.log('id:' + this.props.match.params.id)
        if (this.props.match.params.id) {
            this.props.dispatch(actions.news.getArticle(this.props.match.params.id))
        }


    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            article: nextProps.news.article
        })


        //document.title=this.state.news.article.title+'-React News';

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

        //console.log('state'+JSON.stringify())
        //console.log(this.state.news.article.content)
        // const newsList = this.state.news.length
        //     ?
        //     this.state.news.map((newsItem, index) => (
        //         <div key={index} className='articleContainer' dangerouslySetInnerHTML={newsItem.article.content}>


        //         </div>

        //     ))
        //     :
        //     '沒有加載到任何新聞'

        return (
            //this.createMarkup(this.state.news.article)

            <div id='mobileDetailsContainer'>
                <MobileHeader />
                <div className='mobileList'>
                    <Row>
                        <Col span={24} className='container'>
                            <div className='mobileDetailTitle'>
                                <h1>{title}</h1>
                            </div>
                            <p />
                            <span>日期：{updated}</span>
                            <img src={imagePath} width='100%' height='300px' />
                            <div className='articleContainer' dangerouslySetInnerHTML={{ __html }}></div>
                            <hr />
                            <CommomComments article_id={this.props.match.params.id}/>
                        </Col>
                    </Row>
                    <MobileFooter />
                    <BackTop />
                </div>
            </div>

        )
    }

}
export default connect(mapStateToProps)(MobileNewsDetails)