import { connect } from 'react-redux';
import DialogMessage from './dialogMessage';


let mapStateToProps=(state)=>{
    return{
        dialogsPage:state.dialogPage,
    }
}


let DialogMessageContainer = connect(mapStateToProps)(DialogMessage)

export default DialogMessageContainer; 