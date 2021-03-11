import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfileAC } from '../../state/reducers/profile-reducer';
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {userId = 2}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response=>{
            this.props.setUserProfileAC(response.data);
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
};

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile
});

let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfileAC})(WithUrlDataContainer);