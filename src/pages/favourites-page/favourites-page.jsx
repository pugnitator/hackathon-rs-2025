import { useFavourites } from '../../hooks'
import styled from "styled-components";
import {UserCard} from "../../components/card/user-card.jsx";

export const FavouritesPage = () => {
	const { favourites } = useFavourites()
	
	if (favourites.length === 0) {
		return <div>Избранных участников пока нет...</div>
	}

	return (
		<FavouriteUsers>
			<h2>Избранные участники</h2>
			<UsersBlock>
				{favourites.map((user) =>
					<UserCard key={user.id} user={user} />
				)}
			</UsersBlock>
		</FavouriteUsers>
	)
}

const FavouriteUsers = styled.article`
  color: black;
  margin: 0 auto;
	padding: 0 50px 50px;
	
	& h2 {
		//color: white;
		margin: 50px auto;
		color: pink;
    font-size: 32px;
	}
	
	@media (max-width: 540px) {
		padding: 0 20px 20px;
  }
`

const UsersBlock = styled.section`
	display: flex;
	justify-content: center;
	max-width: 100vw;
	flex-wrap: wrap;
	gap: 50px;
	
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		gap: 30px;
  }

  @media (max-width: 540px) {
		gap: 20px;
	}
`