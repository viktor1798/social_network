import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { getProfileUser } from '../../../../redux/profileReduser';
import { withRouter } from '../../../../utils/withRouter';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';


class ProfileContainer extends React.Component{
    
    componentDidMount(){
        let userId=this.props.match.params.userId;
        if(!userId){
            userId ='28064';
        }
        this.props.getProfileUser(userId)
    }

    render(){
        return(
            <Profile {...this.props} profile={this.props.profile}/>
        )

    }
}

let mapStateToProps=(state)=>({
    profile:state.profilePage.profile,
})

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

export default   connect(mapStateToProps, {getProfileUser}) (withRouter(AuthRedirectComponent));