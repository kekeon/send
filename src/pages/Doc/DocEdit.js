import React from "react"
import {Button} from 'antd';


import AddProjectForm from "../../Components/DocEdit/AddProjectForm"

class docLibrary extends React.Component {

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
        <Button onClick={this.showModal}>创建项目</Button>
        <AddProjectForm
          visible={this.state.visible}
          closeModal = {this.closeModal.bind(this)}
        ></AddProjectForm>
      </div>
    )
  }
}

export default docLibrary

