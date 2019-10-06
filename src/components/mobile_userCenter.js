import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import Logo from 'Source/images/news.png'
import '../../node_modules/antd/dist/antd.css';
import {
    Menu, Icon, Tabs,
    message, Form, Input,
    Button, CheckBox, Modal, Upload
} from 'antd';
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
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
export default class MobileUserCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: []

        };
    };
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
        return (
            <div>
                <MobileHeader />
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs className='tabs_news'>
                            <TabPane tab='我的收藏列表' key='1'>

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
                <MobileFooter />
            </div>
        )

    }

}