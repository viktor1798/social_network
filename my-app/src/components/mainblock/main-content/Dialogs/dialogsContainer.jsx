import { connect } from 'react-redux';
import Dialogs from './dialogs';



let mapStateToProps=(state)=>{
    return{
        isAuth: state.auth.isAuth
    }
}


let DialogsContainer = connect(mapStateToProps)(Dialogs)

export default DialogsContainer; 