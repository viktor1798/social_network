import { connect } from "react-redux";
import { compose } from "redux";
import DialogsNameUsers from "./dialogNameUser";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogPage,
  };
};

export default compose(connect(mapStateToProps))(DialogsNameUsers);
