import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activeEdit = () => {
    this.setState({
      editMode: true,
    });
  };
  deactiveEdit = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
        status: e.currentTarget.value
    });
}
  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onClick={this.activeEdit}>{this.props.status || '-------'}</span>
          </div>
        ) : (
          <div>
            <input
            onChange={this.onStatusChange}
            autoFocus={true}
              onBlur={this.deactiveEdit}
              type="text"
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
