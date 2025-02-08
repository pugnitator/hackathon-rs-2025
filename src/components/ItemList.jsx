import styled from "styled-components"
import PropTypes from "prop-types";
import {UserList} from "./Card/UserCard.jsx";

export const ItemList = (props) => {
    const {itemList} = props;

    if (!Array.isArray(itemList) || itemList.length === 0) {
        return <p>Данные не загружены...</p>;
    }

    return(
        <List>
            {itemList.map((item) => (
                <UserList key={item.id} users={[item]} />
            ))}
        </List>
    )
}

ItemList.propTypes = {
  itemList: PropTypes.array.isRequired,
};

const List = styled.div`
    display: grid;
    gap: 2.5rem;
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);
`