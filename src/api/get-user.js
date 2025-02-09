export const getUser = (userId) =>
	fetch(`http://localhost:3005/devs/${userId}`)
		.then(loadedUser => loadedUser.json())
