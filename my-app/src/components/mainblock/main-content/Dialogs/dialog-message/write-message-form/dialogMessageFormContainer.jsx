import { newSymbolsMessage, sendMessage } from '../../../../../../redux/dialogReduser';
import { connect } from 'react-redux';

import DialogMessageForm from './dialogMessageForm';
import { compose } from 'redux';



let mapStateToProps=(state)=>{
    return{
        dialogsPage:state.dialogsPage
    }
}

export default compose(connect(mapStateToProps,{sendMessage,newSymbolsMessage}))(DialogMessageForm);