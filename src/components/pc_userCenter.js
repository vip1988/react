import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import '../../node_modules/antd/dist/antd.css';
import {
    Menu, Icon, Tabs,
    message, Form, Input,
    Button, CheckBox, Modal, Upload
} from 'antd';
import Header from './pc_header'
import Footer from './pc_footer'
import { connect } from "react-redux";
import actions from 'Source/actions'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
const mapStateToProps = (state) => {
    return {
        collection: state.collection
    }
}
class PCUserCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
            userCollection: props.collection.collection
        };
    };

    componentWillMount() {

        this.props.dispatch(actions.collection.getCollectionList())
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            userCollection: nextProps.collection.collection
        })     
        
    }
    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });

    render() {
        console.log('123')
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        console.log('333')
        const { userCollection } = this.state;
        console.log('444')
            const userCollectionList = userCollection.length ?
            userCollection.map((userCollection, index) => (
                <Card key={index} title={userCollection.article_id} extra={<a href={`#/details/${userCollection.article_id}`}>查看</a>}>
                    <p>{userCollection.article_title}</p>
                </Card>
            ))
            :
            '還沒收藏新聞,趕快開始吧'

        
        


        return (
            <div>
                <Header />
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs className='tabs_news'>
                            <TabPane tab='我的收藏列表' key='1'>
                                <div>
                                    <Row>
                                        <Col span={24}>
                                            {userCollectionList}
                                        </Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab='我的評論列表' key='2'>
                            </TabPane>
                            <TabPane tab='頭像設置' key='3'>

                                <div className="clearfix">
                                    <Upload
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={this.handlePreview}
                                        onChange={this.handleChange}
                                    >
                                        {fileList.length >= 8 ? null : uploadButton}
                                    </Upload>
                                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                    </Modal>
                                </div>
                            </TabPane>
                        </Tabs>
                    </Col>

                    <Col span={2}></Col>
                </Row>
                <Footer />
            </div>
        )

    }

}
export default connect(mapStateToProps)(PCUserCenter)