import React from 'react'
import ReactDOM from 'react-dom'
import {RouterConfig} from './routers/router'
import 'semantic-ui-css/semantic.min.css';

import './index.scss'
import './style/home.scss'

ReactDOM.render(
    <RouterConfig />,
    document.getElementById('root')
)
