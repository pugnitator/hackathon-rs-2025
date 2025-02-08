import { useFavourites } from '../../hooks'

export const FavouritesPage = () => {
	const { favourites, toggleFavourite } = useFavourites()
	
	if (favourites.length === 0) {
		return <div>Избранных участников пока нет...</div>
	}

	return (
		<div>
			{/*{favourites.map(({ decomposition }) => {*/}
			{/*	<CardOfUser key={id}>*/}
			{/*		<Button onClick={() => toggleFavourite(user)}>*/}
			{/*			Удалить из избранного*/}
			{/*		</Button>*/}
			{/*	</CardOfUser>*/}
			{/*})}*/}
		</div>
	)
}