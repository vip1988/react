import React from "react";
import '../../../node_modules/antd/dist/antd.css';
import { Row, Col } from 'antd';
import {
    Menu, Icon, Tabs,
    message, Form, Input,
    Button, CheckBox
} from 'antd';
const FormItem = Form.Item;
export default class MobileLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentKey: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        };
    }
    render() {
       
        return (
            <div>
                    
            </div>
        )
    }
}

