import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../../hoc/withAuthRedirect";
import Dialogs from "./dialogs";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

export default compose(connect(mapStateToProps))(AuthRedirectComponent);

// let DialogsContainer = connect(mapStateToProps)(AuthRedirectComponent)

// export default DialogsContainer;
