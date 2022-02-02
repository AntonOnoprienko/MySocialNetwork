import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile } from '../../redux/profilePageReduсer';
import { useParams } from "react-router";

const withRouter = WrappedComponent => props => {
    const params = useParams();
    
    return (
        <WrappedComponent {...props} params={params}
/>
    );
};

class ProfileContainer extends React.Component {
	
	componentDidMount() {
		let userId = this.props.params.userId;
		if (!userId) {
			userId = 2;
		}
		this.props.getProfile(userId);
	};
	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}
let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
})



let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
	getProfile
}) (WithUrlDataContainerComponent);