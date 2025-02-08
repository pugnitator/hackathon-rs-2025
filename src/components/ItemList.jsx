import styled from "styled-components"
import PropTypes from "prop-types";

export default function ItemList(props) {
    const {itemList} = props;

    return(
        <List>
            {itemList.map((item) => <div key={item.id}>{item.name}</div>)}
        </List>
    )
}

ItemList.propTypes = {
  itemList: PropTypes.array.isRequired,
};

const List = styled.div`
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(2, 1fr);
`