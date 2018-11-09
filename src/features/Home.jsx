import React, {PureComponent} from 'react'
import HomeCp from '../components/Home'
import SideMenu from '../components/SideMenu'
export default class Home extends PureComponent {


    render(){
        return (
            <div id="main-page">
                <HomeCp/>
                <div id="main-content">
                    <SideMenu/>
                    <div id="content">
                        <h4>content</h4>
                    </div>
                </div>
            </div>
        )
    }
}