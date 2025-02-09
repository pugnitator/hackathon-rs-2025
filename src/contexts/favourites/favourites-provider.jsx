import {useState, useEffect, useLayoutEffect} from 'react'
import { getFavouritesFromLocalStorage, saveFavouritesToLocalStorage } from '../../utils'
import { FavouritesContext } from './favourites-context.jsx'

export const FavouritesProvider = ({ children }) => {
	const [favourites, setFavourites] = useState(() => {
		const favouritesFromLocalStorage = getFavouritesFromLocalStorage()

		return favouritesFromLocalStorage || []
	})

	useEffect(() => {
		saveFavouritesToLocalStorage(favourites)
	}, [favourites]);

	return (
		<FavouritesContext.Provider value={{favourites, setFavourites}}>
			{children}
		</FavouritesContext.Provider>
	)
}