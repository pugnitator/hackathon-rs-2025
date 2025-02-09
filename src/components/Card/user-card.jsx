import { FavIcon } from "./components/fav-icon.jsx";
import styled from "styled-components";
import { useFavourites } from "../../hooks/index.js";
import PropTypes from "prop-types";
import { ButtonSmart } from "../ui/button/button-smart.jsx";
import { UserBadge } from "../ui/badge/user-badge.jsx";
import { useNavigate, useLocation } from "react-router-dom";

export const UserCard = ({ user }) => {
  const { favourites, toggleFavourite } = useFavourites();
  const navigate = useNavigate();
  const location = useLocation()
  const isFavourite = favourites.some((fav) => fav.id === user.id);

  const onClickMoreInfo = () => {
    navigate(`/teammate/${user.id}`, { state: { from: location.pathname } });
  };

  return (
    <CustomUserCard>
      <TopSection>
        <FavIcon
          isFavorite={isFavourite}
          onClick={() => toggleFavourite(user)}
        />

        <UserBadge badgeText={user.badge} badgeColor="red">
          <ProfileImage
            src={user.image_url}
            alt={`${user.name} ${user.lastname}`}
          />
        </UserBadge>

        <UserName>{`${user.name}, ${user.age} лет`}</UserName>
        <UserOccupation>
          <span>В проекте занимался: {user.occupation}.</span>
        </UserOccupation>
      </TopSection>
      <BottomSection>
        <AboutText>О себе:</AboutText>
        <AboutConteiner>
          <p>{user.about}</p>
        </AboutConteiner>
        <ButtonSmart
          text="Подробнее"
          color="#6c63ff"
          clickFunc={onClickMoreInfo}
        />
      </BottomSection>
    </CustomUserCard>
  );
};

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
    badge: PropTypes.string.isRequired,
  }),
};

const CustomUserCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 344px;
  height: 40vh;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;

const TopSection = styled.div`
  background: #6c63ff;
  color: white;
  text-align: center;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: 15px;
`;

const AboutText = styled.p`
  text-align: start;
  font-size: 18px;
  font-weight: 500;
`;

const AboutConteiner = styled.div`
  height: 100px;
  padding: 0 10px;
  text-align: start;
  overflow: hidden;
`;