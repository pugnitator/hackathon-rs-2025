import PropTypes from 'prop-types'
import styled from 'styled-components'

export const MembersList = ({ membersList }) => {
    return(
        <List>
            {membersList.map(member => (<div key={member.id}>{member.name}</div>))}
        </List>
    )
}

MembersList.propTypes = {
  membersList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const List = styled.div`
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(2, 1fr);
`