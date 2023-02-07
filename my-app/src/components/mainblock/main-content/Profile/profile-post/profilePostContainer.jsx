import { connect } from 'react-redux';
import { addingPostActionCreater,newSymbolsPostActionCreater } from '../../../../../redux/profileReduser';

import ProfilePost from './profilePost';



let mapDispatchToProps=(dispatch)=>{
    return{
        addPost:()=>{
            dispatch(addingPostActionCreater());
        },
        newSymbl:(text)=>{
            dispatch(newSymbolsPostActionCreater(text))
        }
    }
}

let mapStateToProps=(state)=>{
    return{
        profilePage:state.profilePage
    }
}

let ProfilePostContainer = connect(mapStateToProps,mapDispatchToProps)(ProfilePost);

export default ProfilePostContainer;