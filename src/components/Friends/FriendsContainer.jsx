
import { connect } from 'react-redux';
import Friends from './Friends'
import {followAC,unfollowAC} from '../../redux/friendsReducer'

let mapStateToProps = (state) => {
	return {
		users: state.friendsPage.users
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
	};
}





export default connect(mapStateToProps, mapDispatchToProps)(Friends);