import React from 'react'
import Home from '../features/Home.jsx'
import Operation from "../components/Operation"
import OperationRecord from "../components/OperationRecord"

export const routes = [
    {
        path: "/main",
        component: Home,
        routes: [
            {
                path: "/main/operation",
                component: Operation
            },
            {
                path: "/main/operation-record",
                component: OperationRecord
            }
        ]
    }
];
