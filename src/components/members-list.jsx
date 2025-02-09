import PropTypes from 'prop-types'
import styled from 'styled-components'
import {UserCard} from "./Card/user-card.jsx";

export const MembersList = ({ membersList }) => {

  if (!Array.isArray(membersList) || membersList.length === 0) {
    return <p>Данные не загружены...</p>;
  }

    return(
        <List>
          {membersList.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
        </List>
    )
}

MembersList.propTypes = {
  membersList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const List = styled.div`
  color: black;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  max-width: 100vw;
  gap: 50px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`