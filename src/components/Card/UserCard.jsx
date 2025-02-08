import styled from "styled-components";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {FavIcon} from "./FavIcon.jsx";
import {addStorage} from "../../action/add-storage.js";

export const UserList = (props) => {
    const {users} = props

    const [favorite, setFavorite] = useState([]);

    useEffect(()=> {
        const storeFav = JSON.parse(localStorage.getItem("storage")) || [];
        setFavorite(storeFav)
    }, [])


    const toggle = (id) => {
        addStorage(id);
        setFavorite((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };


    return (
        <UserGrid>
            {users.map((user) => (
                <UserCard key={user.id}>
                    <TopSection>
                        <FavIcon
                            isFavorite={favorite.includes(user.id)}
                            onClick={() => toggle(user.id)}

                        />
                        <ProfileImage src={user.image_url} alt={`${user.name} ${user.lastname}`} />
                        <UserName>{`${user.name}, ${user.age}`}</UserName>
                        <UserOccupation>
                            <span>{user.ocupation}</span> <span>{user.location}</span>
                        </UserOccupation>
                    </TopSection>
                    <BottomSection>
                        <h4>О себе</h4>
                        <p>{user.about}</p>
                        <MoreButton>Подробнее</MoreButton>
                    </BottomSection>
                </UserCard>
            ))}
        </UserGrid>
    );
};

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            age: PropTypes.string.isRequired,
            image_url: PropTypes.string.isRequired,
            about: PropTypes.string.isRequired,
            ocupation: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
        })
    ).isRequired,
};



const UserGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const UserCard = styled.div`
    display: flex;
    flex-direction: column;
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
