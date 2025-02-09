import PropTypes from "prop-types";
import styled from "styled-components";
import { UserCard } from "./Card/temp-user-card";

export const MembersList = ({ membersList }) => {
  if (!Array.isArray(membersList) || membersList.length === 0) {
    return <p>Данные не загружены...</p>;
  }

  return (
    <List>
      {membersList.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </List>
  );
};

MembersList.propTypes = {
  membersList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  max-width: 1300px;
`;