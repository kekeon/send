import React from 'react'
import {Route,BrowserRouter,Switch } from 'react-router-dom'
import {routes} from "./routeConfig"

import Login from '../features/Login.jsx'


export const  RouteWithSubRoutes = (route) => {
    return (
        <Route
            path={route.path}
            render={props => (
        <route.component {...props} routes={route.routes} />
      )}
        />
    );
}


export const  RouterConfig = ()=>{
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