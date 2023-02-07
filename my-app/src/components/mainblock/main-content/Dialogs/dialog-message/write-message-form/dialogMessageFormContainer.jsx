import { newSymbolsMessageActionCreater, sendMessageActionCreater } from '../../../../../../redux/dialogReduser';
import { connect } from 'react-redux';

import DialogMessageForm from './dialogMessageForm';



let mapStateToProps=(state)=>{
    return{
        dialogsPage:state.dialogsPage
    }
}
let  mapDispatchToProps=(dispatch)=>{
    return{
        sandingMassege:()=>{
            dispatch(sendMessageActionCreater());
        },
        newSymbl:(text)=>{
            dispatch(newSymbolsMessageActionCreater(text))
        }
    }
}


let DialogMessageFormContainer = connect(mapStateToProps,mapDispatchToProps)(DialogMessageForm);

export default DialogMessageFormContainer;