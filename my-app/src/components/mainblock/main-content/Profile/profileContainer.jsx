import React from "react";
import { connect } from "react-redux";
import Profile from "./profile";
import { getProfileUser, getStatus, updateStatus } from "../../../../redux/profileReduser";
import { withRouter } from "../../../../utils/withRouter";
import { withAuthRedirect } from "../../../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.autorizedUserId;
    }
    this.props.getProfileUser(userId);
    this.props.getStatus(userId)
  
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status:state.profilePage.status,
  autorizedUserId: state.auth.id
});

export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, { getProfileUser,getStatus, updateStatus })
)(ProfileContainer);
