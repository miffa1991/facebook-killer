export const getUsersSelector = (state) => {
	return state.usersPage.users;
}

export const getPageLimitSelector = (state) => {
	return state.usersPage.pageLimit;
}

export const getPageUserCountSelector = (state) => {
	return state.usersPage.pageUserCount;
}

export const getPageCurrentSelector = (state) => {
	return state.usersPage.pageCurrent;
}

export const getIsFetchingSelector = (state) => {
	return state.usersPage.isFetching;
}

export const getFollowingInProgressSelector = (state) => {
	return state.usersPage.followingInProgress;
}

