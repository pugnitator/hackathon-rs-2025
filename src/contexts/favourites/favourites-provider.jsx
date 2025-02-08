import { useState, useEffect } from 'react'
import { getFavouritesFromLocalStorage, saveFavouritesToLocalStorage } from '../../utils'
import { FavouritesContext } from './favourites-context.jsx'

export const FavouritesProvider = ({ children }) => {
	const [favourites, setFavourites] = useState([])

	useEffect(() => {
		const favouritesFromLocalStorage = getFavouritesFromLocalStorage()
		setFavourites(favouritesFromLocalStorage)
	}, [])

	useEffect(() => {
		saveFavouritesToLocalStorage(favourites)
	}, [favourites])

	return (
		<FavouritesContext.Provider value={{favourites, setFavourites}}>
			{children}
		</FavouritesContext.Provider>
	)
}