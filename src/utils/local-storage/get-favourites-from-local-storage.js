export const getFavouritesFromLocalStorage = () => {
	const data = localStorage.getItem('favourites')
	return data ? JSON.parse(data) : []
}