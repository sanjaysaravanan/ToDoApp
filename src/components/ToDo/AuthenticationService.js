export const registerSuccess = (userName, password) => {
	sessionStorage.setItem("authenticatedUser", userName);
};

export const logoutUser = () => {
	sessionStorage.removeItem("authenticatedUser");
};

export const isUserLoggedIn = () => {
	let user = sessionStorage.getItem("authenticatedUser");
	if (user !== null) return true;
	return false;
};
