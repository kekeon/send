import React from "react"
import { connect } from 'dva'
import {Button} from 'antd'

@connect(({user, loading})=>({
  user,
  loading
}))
class History extends React.Component {


  handClick(){
    console.log(this);
    const {dispatch, loading} = this.props
    console.log(loading.effects);
    dispatch({type:'user/get', payload:{name:'admin'}})
  }

  render(){

    const {loading, user } = this.props
    console.log(loading);
    console.log(user);
    return (
      <div>
        <span>history</span>
        <div>{user.name}</div>
        <Button onClick={this.handClick.bind(this)}>login</Button>
      </div>

    )
  }
}

export default History

