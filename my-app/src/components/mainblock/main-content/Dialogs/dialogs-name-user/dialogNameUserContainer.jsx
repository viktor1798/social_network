import { connect } from 'react-redux';
import DialogsNameUsers from './dialogNameUser';

let mapStateToProps=(state)=>{
    return{
        dialogsPage:state.dialogPage

    }
    debugger;
}

let  DialogsNameUsersContainer = connect(mapStateToProps)(DialogsNameUsers)

export default DialogsNameUsersContainer;