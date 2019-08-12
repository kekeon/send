import  React, {Component} from "react"
import {Button} from 'antd';


import AddForm from "./subComp/AddForm"

class DocEdit extends Component<any>{

  state = {
    visible: false
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  closeModal = () => {
    this.setState({
      visible: false
    })
  }

  render() {

    return (
      <div>
        <Button onClick={this.showModal} >创建项目</Button>
        <AddForm
          visible={this.state.visible}
          closeModal = {this.closeModal}
        ></AddForm>

      </div>
    )
  }
}

export default DocEdit

