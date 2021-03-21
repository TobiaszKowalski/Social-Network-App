import React from 'react';
import Profile from './Profile';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { connect } from 'react-redux';
import { getProfileThunkCreator } from '../../state/reducers/profile-reducer';
import { withRouter } from "react-router";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {userId = 2}
        this.props.getProfileThunkCreator(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
});

let WithUrlDataContainer = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getProfileThunkCreator})(WithUrlDataContainer);