import React from 'react'
import Home from '../features/Home.jsx'
import createProject from "../components/CreateProject"
import inviteMember from "../components/InviteMember"
import RequestPage from "../components/RequestPage"

export const routes = [
    {
        path: "/main",
        component: Home,
        routes: [
            {
                path: "/main/create-project",
                component: createProject
            },
            {
                path: "/main/invite-member",
                component: inviteMember
            },
            {
                path: "/main/request",
                component: RequestPage
            }
        ]
    }
];
