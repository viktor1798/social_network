import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import Axios from "axios";
import { setProfile } from '../../../../redux/profileReduser';
import { withRouter } from '../../../../utils/withRouter';


class ProfileContainer extends React.Component{
    
    componentDidMount(){
        let userId=this.props.match.params.userId;
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response=>{
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


export default   connect(mapStateToProps, {setProfile}) (withRouter(ProfileContainer));