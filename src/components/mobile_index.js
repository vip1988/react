import React from 'react'
import ReactDOM from 'react-dom'
require('Source/less/theme.less')
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import MobileList from './mobile_list'
import {
    Menu, Icon, Tabs,
    message, Form, Input,
    Button, Checkbox, Modal, Carousel
} from 'antd';
import carousel_1 from 'Source/images/carousel_1.jpg'
import carousel_2 from 'Source/images/carousel_2.jpg'
import carousel_3 from 'Source/images/carousel_3.jpg'
import carousel_4 from 'Source/images/carousel_12.jpg'
import carousel_5 from 'Source/images/carousel_11.jpg'
const TabPane = Tabs.TabPane
export default class MobileIndex extends React.Component {
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
                <MobileHeader />
                <Tabs>
                    <TabPane tab='頭條' key='1'>
                        <Carousel {...setting}>
                            <div><img className='mobileCarouselImg' src={carousel_1} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_2} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_3} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_4} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_5} /></div>
                        </Carousel>
                        <MobileList count={10} />
                    </TabPane>
                    <TabPane tab='社會' key='2'>
                        <Carousel {...setting}>
                            <div><img className='mobileCarouselImg' src={carousel_1} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_2} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_3} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_4} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_5} /></div>
                        </Carousel>
                        <MobileList count={10} />
                    </TabPane>
                    <TabPane tab='國內' key='3'>
                        <Carousel {...setting}>
                            <div><img className='mobileCarouselImg' src={carousel_1} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_2} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_3} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_4} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_5} /></div>
                        </Carousel>
                        <MobileList count={10} />
                    </TabPane>
                    <TabPane tab='國際' key='4'>
                        <Carousel {...setting}>
                            <div><img className='mobileCarouselImg' src={carousel_1} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_2} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_3} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_4} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_5} /></div>
                        </Carousel>
                        <MobileList count={10} />
                    </TabPane>
                    <TabPane tab='娛樂' key='5'>
                        <Carousel {...setting}>
                            <div><img className='mobileCarouselImg' src={carousel_1} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_2} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_3} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_4} /></div>
                            <div><img className='mobileCarouselImg' src={carousel_5} /></div>
                        </Carousel>
                        <MobileList count={10} />
                    </TabPane>
                </Tabs>
                <MobileFooter />
            </div>
        )
    }
}
