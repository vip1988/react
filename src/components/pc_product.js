import React from 'react'

export default class PCProduct extends React.Component{
render(){
    return(
        <div className="mod_r_product" ne-module="/www/index20170701/modules/product20190315/product.js">
        <div className="cm_mod_tab cm_mod_tab1 mod_all_product">
          <div className="tab_nav">
            <h2><span className="title"><i />我的产品</span></h2>
            <a href="javascript:;" ne-click="productAll()" className="more" ne-text="{{myState.openProduct ? '返回':'全部产品'}}" target="_self">全部产品</a>
          </div>
          <div className="tab_main no_login_tabmain">
            {/* 网易新闻 */}
            <div className="cell clearfix cell_news">
              <a href="http://www.163.com/newsapp" className="logo">网易新闻</a>
              <div className="detail">
                <h3><a href="http://www.163.com/newsapp">网易新闻</a></h3>
                <div>
                  <a href="https://news.163.com/">新闻首页</a>
                  <a href="http://3g.163.com/wap/special/newsapp/#download">ios下载</a>
                  <a href="http://3g.163.com/wap/special/newsapp/#download">Android下载</a>
                </div>
              </div>
            </div>
            {/* 网易邮箱 */}
            <div className="cell clearfix cell_email">
              <a href="http://email.163.com/" className="logo">网易邮箱</a>
              <div className="detail">
                <h3><a href="http://email.163.com/#from=ntes_product">网易邮箱</a></h3>
                <div className="y_login">
                  未读邮件:
                  <a href="http://email.163.com/#from=ntes_product" className="fontred mailnum" target="_blank" ne-href="{{myState.loginmail}}">
                    0
                  </a>
                  积分:
                  <a href="http://jifen.mail.126.com/" className="fontred" ne-href="{{myState.jifenhref}}">
                    0
                  </a>
                  <a href="http://email.163.com/#from=ntes_product&ntes_mail_firstpage=compose" className="go_pro go_writemail" target="_blank" ne-href="{{myState.loginmail}}&ntes_mail_firstpage=compose"><span>写邮件</span></a>
                </div>
                <div className="no_login">
                  <a href="http://email.163.com/#from=ntes_product">免费邮</a>
                  <a href="http://vipmail.163.com/#from=www">VIP邮箱</a>
                  <a href="http://qiye.163.com/">企业邮箱</a>
                  <a href="http://mail.163.com/client/dl.html?from=mail46">邮箱大师</a>
                </div>
              </div>
            </div>
            {/* 网易考拉 */}
            <div className="cell clearfix cell_kaola">
              <a href="http://da.kaola.com/redirect?t=5aaebece4bb92c00&p=c901ea7c&proId=1024&code=c0acca22363ebe70c36716dd32724294&target=https%3A%2F%2Fpages.kaola.com%2Fpages%2Factivity%2Fjfccri80pages1.shtml%3Ftag%3Dbe3d8d027a530881037ef01d304eb505" className="logo">网易考拉</a>
              <div className="detail">
                <h3><a href="http://da.kaola.com/redirect?t=5aaebece4bf92c00&p=c901ea7c&proId=1024&code=ac60e127c8d203b31a45b2faef7c1579&target=https%3A%2F%2Fpages.kaola.com%2Fpages%2Factivity%2Fjfccri80pages1.shtml%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">网易考拉</a></h3>
                {/* <p class="y_login">
                          待发货:<a href="javascript:void(0);"  id="kaolafahuo" class="fontred mr20">0</a>
                          待收货:<a href="javascript:void(0);"  id="kaolashouhuo" class="fontred">0</a>
                          <a class="go_pro" href="javascript:void(0);" target="_blank">
                              <span>查物流</span>&gt;</a>
                      </p> */}
                <div>
                  <a href="http://da.kaola.com/redirect?t=5aaebece4c392c00&p=c901ea7c&proId=1024&code=ae32f9968047231889f4fb6ff9653e61&target=https%3A%2F%2Fpages.kaola.com%2Fpages%2Factivity%2Fbimaibangdan.shtml%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">千元新人礼包</a>
                  <a href="http://da.kaola.com/redirect?t=5aaebece4c792c00&p=c901ea7c&proId=1024&code=30307483dc4c83d3cc2f94a9e3131d88&target=https%3A%2F%2Fpages.kaola.com%2Fpages%2Factivity%2Fjfccri80pages1.shtml%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">新人专享</a>
                  <a href="http://da.kaola.com/redirect?t=5aaebece4c792c01&p=c901ea7c&proId=1024&code=4e6ae582034efa9be92c87e35b6a0a64&target=https%3A%2F%2Fpages.kaola.com%2Fpages%2Factivity%2Fgamesem.shtml%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">点卡9.8折</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    )
}
}