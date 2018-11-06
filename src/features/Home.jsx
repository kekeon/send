import React, {PureComponent} from 'react'
import axios from '../service/axiosConfig'
import LoginForm from '../components/LoginCom'
export default class Home extends PureComponent{

    componentDidMount(){
        axios.get('api/list')
    }
    render(){
        return (
            <LoginForm/>
        )
    }
}