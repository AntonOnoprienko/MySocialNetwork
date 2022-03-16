import React from "react"
import Paginator from "../Common/Paginator/Paginator"
import User from "./User"

const Users = ({user,followingInProgress,unfollow,follow,...props}) => {
	
	
	return <div>
		<Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged} pageNumbers={props.pageNumbers}/>
		{props.users.map((u) => <User key={u.users} user={u} followingInProgress={followingInProgress} unfollow={ unfollow } follow={ follow }/>)}
		</div>
};
export default Users;