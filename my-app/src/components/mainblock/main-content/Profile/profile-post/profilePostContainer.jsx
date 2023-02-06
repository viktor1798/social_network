import React from 'react';
import { addingPostActionCreater,newSymbolsPostActionCreater } from '../../../../../redux/profileReduser';

import ProfilePost from './profilePost';



const ProfilePostContainer = (props) => {
    
    let state = props.store.getState();


    let addingPost =()=>{
        props.store.dispatch(addingPostActionCreater());
    }

    let newSymbols=(text)=>{
        props.store.dispatch(newSymbolsPostActionCreater(text));
    }
    return (
        <ProfilePost addPost={addingPost} newSymbl ={newSymbols} state={state}/>
    )
}

export default ProfilePostContainer;