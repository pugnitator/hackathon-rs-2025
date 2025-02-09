export const getUsers = () =>
	fetch("http://localhost:3005/devs")
		.then((res) => res.json())