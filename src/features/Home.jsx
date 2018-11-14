import React from 'react'
import HomeCp from '../components/Home'
import SideMenu from '../components/SideMenu'
import {RouteWithSubRoutes} from "../routers/router"

export default function Home({ routes }) {
    return (
        <div id="main-page">
            <HomeCp/>
            <div id="main-content">
                <SideMenu/>
                <div id="content">
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </div>
            </div>
        </div>
    );
}
