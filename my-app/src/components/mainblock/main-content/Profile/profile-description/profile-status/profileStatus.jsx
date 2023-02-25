import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
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
  };

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onClick={this.activeEdit.bind(this)}>
              {this.props.status}
            </span>
          </div>
        ) : (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deactiveEdit.bind(this)}
              type="text"
             value={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
