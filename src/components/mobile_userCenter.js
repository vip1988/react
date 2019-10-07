import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import Logo from 'Source/images/news.png'
import '../../node_modules/antd/dist/antd.css';
import {
    Menu, Icon, Tabs,
    message, Form, Input,
    Button, CheckBox, Modal, Upload, Card
} from 'antd';
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
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
        collection: state.collection,
        comment: state.comment
    }
}
class MobileUserCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
            userCollection: props.collection.collection,
            userComment: props.comment.comment

        };
    };

    componentWillMount() {

        this.props.dispatch(actions.collection.getCollectionList())
        this.props.dispatch(actions.comment.getCommentList())
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            userCollection: nextProps.collection.collection,
            userComment: nextProps.comment.comment
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
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { userCollection, userComment } = this.state;
        const userCollectionList = userCollection.length ?
            userCollection.map((userCollection, index) => (
                <Card key={index} title={userCollection.article_id} extra={<a href={`#/mobile_details/${userCollection.article_id}`}>查看</a>}>
                    <p>{userCollection.article_title}</p>
                </Card>
            ))
            :
            '還沒收藏新聞,趕快開始吧'
        const userCommentList = userComment.length ?
            userComment.map((userComment, index) => (
                <Card key={index} title={`您於${userComment.updated} 評論了文章 ${userComment.article_id}`} extra={<a href={`#/mobile_details/${userComment.article_id}`}>查看</a>}>
                    <p>{userComment.comment}</p>
                </Card>
            ))
            :
            '還沒評論,趕快開始吧'

        return (
            <div>
                <MobileHeader />
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
                                <div>
                                    <Row>
                                        <Col span={24}>
                                            {userCommentList}
                                        </Col>
                                    </Row>
                                </div>
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
                <MobileFooter />
            </div>
        )

    }

}
export default connect(mapStateToProps)(MobileUserCenter)