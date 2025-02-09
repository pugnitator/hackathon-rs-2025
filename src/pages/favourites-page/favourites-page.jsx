import { useFavourites } from "../../hooks";
import styled from "styled-components";
import { MembersList } from "../../components/members-list.jsx";

export const FavouritesPage = () => {
  const { favourites } = useFavourites();

  return (
    <FavouriteUsers>
      <h2>Избранные участники</h2>
      {favourites.length === 0 ? (
        <div>Избранных участников пока нет...</div>
      ) : (
        <ListContainer>
          <MembersList membersList={favourites} />
        </ListContainer>
      )}
    </FavouriteUsers>
  );
};

const FavouriteUsers = styled.article`
  color: black;
  margin: 0 auto;
  padding: 0 50px 50px;

  & h2 {
    margin: 50px auto;
    color: #6c63ff;
    font-size: 32px;
  }

  @media (max-width: 540px) {
    padding: 0 20px 20px;
  }
`;

const ListContainer = styled.main`
  display: flex;
  padding: 0 100px 100px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
