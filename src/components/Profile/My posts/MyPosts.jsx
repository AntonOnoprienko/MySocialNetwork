import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';



const MyPosts = (props) => {
	

	let postsElements =
		props.postsData.map(p => <Post key={p.id} src={p.url} name={p.name} message={p.message} likesCount={p.likeCount} />);
	
	let addPostText = (value) => {
		props.addPost(value.newPostMessage);
	}

	//let onPostChange = (e) => {
	//	let text = e.target.value;
	//	props.updateNewPostText(text)
	//}
	return (
		<div className={classes.content}>
			<div className={classes.posts}>
				<PostsReduxForm onSubmit={ addPostText }/>
					{ postsElements }
				</div>
		  </div>
			)
	}

export default MyPosts;


const PostForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field component='textarea' placeholder='Enter your post text' name='newPostMessage' />
		</div>
		<div>
			<button >Add Post </button>
		</div>
	</form>
};

const PostsReduxForm = reduxForm({ form: 'ProfileAddPostForm' })(PostForm)