import React from 'react'
import {Route,Router,BrowserRouter,Switch } from 'react-router-dom'
import createBrowserHistory from "history/createBrowserHistory";

import Login from '../features/Login.jsx'
import Home from '../features/Home.jsx'
const RouterConfig = ()=>{
   // const history = createBrowserHistory()
    return (
        <BrowserRouter>
                <Switch>
                    <Route  exact path="/" component={Login}/>
                    <Route  exact path="/home" component={Home}/>
                </Switch>

        </BrowserRouter>
    )
}
export default RouterConfig