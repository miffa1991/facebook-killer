import React from 'react';


class PropfileStatusContainer extends React.Component {

  state = {
    editMode: false
  }

  activeEdit() {
    this.setState({
      editMode: true
    })
  }

  deactiveEdit() {
    this.setState({
      editMode: false
    })
  }

  render() {
    debugger
    return (
      <div>
        {!this.state.editMode &&
          <div >
          <span onClick={this.activeEdit.bind(this)}>{this.props.status}</span>
          </div>}
        {this.state.editMode &&
          <div>
            <input autoFocus={true} onBlur={this.deactiveEdit.bind(this)} value={this.props.status} />
          </div>
        }
      </div>
    )
  }

}

export default PropfileStatusContainer;