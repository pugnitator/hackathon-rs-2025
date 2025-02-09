import { useFavourites } from "../../hooks";
import styled from "styled-components";
import { MembersList } from "../../components/members-list.jsx";

export const FavouritesPage = () => {
  const { favourites } = useFavourites();

  if (favourites.length === 0) {
    return <div>Избранных участников пока нет...</div>;
  }

  return (
    <FavouriteUsers>
      <h2>Избранные участники</h2>
	  <MembersList membersList={favourites}/>
    </FavouriteUsers>
  );
};

const FavouriteUsers = styled.article`
  color: black;
  margin: 0 auto;
  padding: 0 50px 50px;

  & h2 {
    margin: 50px auto;
    color: pink;
    font-size: 32px;
  }

  @media (max-width: 540px) {
    padding: 0 20px 20px;
  }
`;
