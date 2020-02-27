import React from 'react';


class PropfileStatusContainer extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activeEdit = () => {
    this.setState({
      editMode: true
    })
  }

  deactiveEdit = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status)
  }

  onChangeStatus = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  }
  componentDidUpdate(prevProps){
    if (prevProps.status !== this.props.status) {
    this.setState({
      status: this.props.status
    });
  }
}
  render() {
    debugger
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onClick={this.activeEdit}>{this.props.status || '-----'}</span>
          </div>}
        {this.state.editMode &&
          <div>
            <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.deactiveEdit} value={this.state.status} />
          </div>
        }
      </div>
    )
  }

}

export default PropfileStatusContainer;