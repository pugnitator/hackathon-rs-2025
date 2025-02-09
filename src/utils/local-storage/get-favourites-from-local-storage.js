export const getFavouritesFromLocalStorage = () => {
	const data = localStorage.getItem('favourites')
	return JSON.parse(data)
}