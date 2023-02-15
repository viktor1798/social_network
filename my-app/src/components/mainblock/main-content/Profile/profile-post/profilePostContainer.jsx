import { connect } from 'react-redux';
import { addPost,newSymbol } from '../../../../../redux/profileReduser';

import ProfilePost from './profilePost';


let mapStateToProps=(state)=>{
    return{
        profilePage:state.profilePage
    }
}

let ProfilePostContainer = connect(mapStateToProps,{newSymbol,addPost})(ProfilePost);

export default ProfilePostContainer;