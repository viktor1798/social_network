import { connect } from "react-redux";
import { compose } from "redux";
import DialogMessage from "./dialogMessage";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogPage,
  };
};

export default compose(connect(mapStateToProps))(DialogMessage);
