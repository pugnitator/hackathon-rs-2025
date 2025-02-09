export const saveFavouritesToLocalStorage = (favourites) => {
	localStorage.setItem('favourites', JSON.stringify(favourites))
}