import { connect } from "react-redux";
import { compose } from "redux";
import { addPost} from "../../../../../redux/profileReduser";

import ProfilePost from "./profilePost";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};


export default compose(connect(mapStateToProps, { addPost }))(
  ProfilePost
);
