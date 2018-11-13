import React from 'react'
import {Route,Router,BrowserRouter,Switch } from 'react-router-dom'
import createBrowserHistory from "history/createBrowserHistory";
import {routes} from "./routeConfig"

import Login from '../features/Login.jsx'
function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
        <route.component {...props} routes={route.routes} />
      )}
        />
    );
}

const RouterConfig = ()=>{
   // const history = createBrowserHistory()
    return (
        <BrowserRouter>
                <Switch>
                    <Route  exact path="/" component={Login}/>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>

        </BrowserRouter>
    )
}
export default RouterConfig