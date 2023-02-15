import { newSymbolsMessage, sendMessage } from '../../../../../../redux/dialogReduser';
import { connect } from 'react-redux';

import DialogMessageForm from './dialogMessageForm';



let mapStateToProps=(state)=>{
    return{
        dialogsPage:state.dialogsPage
    }
}

let DialogMessageFormContainer = connect(mapStateToProps,{sendMessage,newSymbolsMessage})(DialogMessageForm);

export default DialogMessageFormContainer;