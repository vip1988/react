import React from 'react'
import ReactDOM from 'react-dom'
require('Source/less/theme.less')
import Header from './pc_header'
import Footer from './pc_footer'
import News_container from './pc_news_container'
import NewsImageBlock from './pc_news_image_block'
import NewsVideoBlock from './pc_news_video_block'
import { Link } from 'react-router-dom';
export default class Index extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
            
        return(
            <div>
               <Header/>
                <News_container/>
                <NewsImageBlock  counts={10} type='top' width='100%' cardTitle='新聞焦點' imageWidth='122px'/>
                <NewsImageBlock  counts={10} type='entertainment' width='100%' cardTitle='娛樂頭條' imageWidth='122px'/>
                <NewsImageBlock  counts={10} type='internal' width='100%' cardTitle='國內頭條' imageWidth='122px'/>
                <NewsVideoBlock  counts={10} type='video' width='280px'height='400px' cardTitle='影音推薦' videoWidth='122px'/>
               <Footer/>
            </div>
        )
    }
}
