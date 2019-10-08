import React from 'react'
import ReactDOM from 'react-dom'
require('Source/less/theme.less')
import '../../node_modules/antd/dist/antd.css';
import {
    Menu, Icon, Tabs,
    message, Form, Input,
    Button, Checkbox, Modal
} from 'antd';
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import carousel_1 from 'Source/images/carousel_1.jpg'
import carousel_2 from 'Source/images/carousel_2.jpg'
import carousel_3 from 'Source/images/carousel_3.jpg'
import carousel_4 from 'Source/images/carousel_12.jpg'
import carousel_5 from 'Source/images/carousel_11.jpg'
import NewsBlock from './pc_news_block'
import NewsProduct from './pc_product'
const { TabPane } = Tabs;
export default class PCNewsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const setting = {

            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        }
        return (
            <div>
                <Row type="flex" justify="start">
                    <Col span={2}></Col>
                    <Col span={20} className='container'>
                        <div className='leftContainer'>
                            <div className='carousel'>
                                <Carousel {...setting}>
                                    <div><img src={carousel_1} /></div>
                                    <div><img src={carousel_2} /></div>
                                    <div><img src={carousel_3} /></div>
                                    <div><img src={carousel_4} /></div>
                                    <div><img src={carousel_5} /></div>
                                </Carousel>
                            </div>
                        </div>
                        <Tabs className='tabs_news'>
                            <TabPane tab='頭條' key='1'>
                                <NewsBlock counts={10} type='top' width='100%' bordered='false' />
                            </TabPane>
                            <TabPane tab='娛樂' key='2'>
                                <NewsBlock counts={10} type='entertainment' width='100%' bordered='false' />
                            </TabPane>
                            <TabPane tab='國內' key='3'>
                                <NewsBlock counts={10} type='internal' width='100%' bordered='false' />
                            </TabPane>
                            <TabPane tab='國際' key='4'>
                                <NewsBlock counts={10} type='international' width='100%' bordered='false' />
                            </TabPane>
                        </Tabs>
                        {/* <Tabs className='tabs_product'>
                            <TabPane tab='產品' key='1'>
                                <NewsProduct />
                            </TabPane>
                        </Tabs>
                        */}
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )

    }


}
