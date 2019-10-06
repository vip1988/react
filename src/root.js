import React from 'react'
import ReactDOM from 'react-dom'
require('Source/less/theme.less')
require('Source/less/mobile.less')
import Index from './components/pc_index'
import MobileIndex from './components/mobile_index'



export default class Root extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (

          






            <div className="ui grid"> 
                <div className="computer only row">
                    <div class="sixteen wide column">
                       <Index />
                    </div>

                </div>

                <div className="tablet only mobile only row">
                    <div class="sixteen wide column">
                        <MobileIndex />
                    </div>
                </div> 
            </div>
            
        )

    }


}