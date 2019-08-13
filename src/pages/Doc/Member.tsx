import React from "react"
import { connect } from 'dva'
import {Button} from 'antd'
import {Dispatch, Loading} from "@/models/connect";

interface MemberProps  {
  loading: Loading;
  dispatch: Dispatch;
  children: React.ReactElement;
  member?: any;
}

@connect(({member, loading})=>({
  member,
  loading
}))
class Member extends React.Component<MemberProps> {


  handClick(){
    console.log(this);
    const {dispatch, loading} = this.props
    console.log(loading.effects);
    dispatch({type:'member/post', payload:{name:'admin'}})
  }

  render(){

    const {loading, member } = this.props
    console.log(loading);
    console.log(member);
    return (
      <div>
        <span>history</span>
        <div>{member.member}</div>
        <Button onClick={this.handClick.bind(this)}>login</Button>
      </div>

    )
  }
}

export default Member

