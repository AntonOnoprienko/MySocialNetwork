import StoreContext from '../../StoreContext';
import MyPostsContainer from './My posts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			
			<MyPostsContainer /*store={//props.store}*/ />
			
		  </div>
		  
			)
	}


export default Profile;