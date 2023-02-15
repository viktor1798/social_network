import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import Axios from "axios";
import { setProfile } from '../../../../redux/profileReduser';


class ProfileContainer extends React.Component{
    
    componentDidMount(){
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response=>{
            this.props.setProfile(response.data)
        });
    }

    render(){
        return(
            <Profile {...this.props} profile={this.props.profile}/>
        )

    }
}

let mapStateToProps=(state)=>({
    profile:state.profilePage.profile
})

export default   connect(mapStateToProps, {setProfile}) (ProfileContainer);