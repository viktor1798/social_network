import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./profile";
import {
  getProfileUser,
  getStatus,
  updateStatus,
} from "../../../../redux/profileReduser";
import { withRouter } from "../../../../utils/withRouter";
import { withAuthRedirect } from "../../../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileContainer = (props) => {
  
  useEffect(() => {
    let userId = props.match.params.userId;
    if (!userId) {
      userId = props.autorizedUserId;
    }
    props.getProfileUser(userId);
    props.getStatus(userId);
  },[]);
  
  return (
    <Profile
      {...props}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
    />
  );
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserId: state.auth.id,
});

export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, { getProfileUser, getStatus, updateStatus })
)(React.memo(ProfileContainer));
