import { useFavourites } from "../../hooks/index.js";
import { FavIcon } from "./components/fav-icon.jsx";
import PropTypes from "prop-types";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

export const UserCard = ({ user }) => {
	const { favourites, toggleFavourite } = useFavourites()
	const navigate = useNavigate()

	const isFavourite = favourites.some(fav => fav.id === user.id)

	return (
		<CustomUserCard>

			<TopSection>
				<FavIcon
					isFavorite={isFavourite}
					onClick={() => toggleFavourite(user)}
				/>

				<ProfileImage src={user.image_url} alt={`${user.name} ${user.lastname}`} />

				<UserName>{`${user.name}, ${user.age} лет`}</UserName>

				<CustomUserBadge>
					{user.badge}
				</CustomUserBadge>

			</TopSection>
			<BottomSection>
				<UserOccupation>
					<span>В проекте занимался: {user.occupation}.</span>
				</UserOccupation>
				
				<p>О себе:</p>

				<p>{user.about}</p>
				<MoreButton onClick={() => navigate(`/teammate/${user.id}`)} >Подробнее</MoreButton>
			</BottomSection>
		</CustomUserCard>
	)
}

UserCard.propTypes = {
	user: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		lastname: PropTypes.string.isRequired,
		age: PropTypes.string.isRequired,
		image_url: PropTypes.string.isRequired,
		about: PropTypes.string.isRequired,
		occupation: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		badge: PropTypes.string.isRequired
	})
}

const CustomUserCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 344px;
    height: 518px;
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;

const TopSection = styled.div`
    background: #6C63FF;
    color: white;
    text-align: center;
    padding: 20px;
    position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
`;

const CustomUserBadge = styled.div`
	background-color: #f9f0ff;
	color: #541cab;
	box-shadow: 2px 2px 10px #541cab;
	border: 1px solid #d3adf7;
	border-radius: 5px;
	padding: 0 5px;
	cursor: default;
`

const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid white;
    margin-bottom: 10px;
`;

const UserName = styled.h3`
    font-size: 20px;
    margin: 5px 0;
`;

const UserOccupation = styled.p`
    font-size: 14px;
    opacity: 0.8;
		margin-top: -10px;
`;

const BottomSection = styled.div`
    padding: 15px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;

const MoreButton = styled.button`
    width: 100%;
    padding: 10px;
    background: #6C63FF;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    margin-top: auto;
    transition: background 0.3s;
  
    &:hover {
        background: #5847a6;
    }
`;