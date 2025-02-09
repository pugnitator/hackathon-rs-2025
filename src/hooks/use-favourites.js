import { useContext } from 'react'
import { FavouritesContext } from '../contexts'

export const useFavourites = () => {
	const {favourites, setFavourites} = useContext(FavouritesContext)

	const toggleFavourite = user => {
		setFavourites(prevState => {
			const isFavourite = prevState.some(({ id: favouriteMemberId }) => favouriteMemberId === user.id)

			return isFavourite
				? prevState.filter(({ id: favouriteMemberId }) => favouriteMemberId !== user.id)
				: [...prevState, user]
		})
	}

	return {
		favourites,
		toggleFavourite
	}
}