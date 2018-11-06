import React from 'react'
import {Route,BrowserRouter} from 'react-router-dom'

import Home from '../features/Home.jsx'
const RouterConfig = ()=>{

    return (
        <BrowserRouter>
            <Route  path="/" component={Home}/>
        </BrowserRouter>
    )
}
export default RouterConfig