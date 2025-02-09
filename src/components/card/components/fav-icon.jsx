import styled from "styled-components";

export const FavIcon = ({isFavorite, onClick}) => {
    return (
        <HeartWrapper onClick={onClick} $isFavorite={isFavorite}>
            <svg
                width="34"
                height="31"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill={isFavorite ? "red" : "none"}
                    stroke="white"
                    strokeWidth="2"
                />
            </svg>
        </HeartWrapper>
    )
}

const HeartWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${({$isFavorite}) => ($isFavorite ? "#ffe6e6" : "#f0f0f0")};
    transition: background-color 0.3s, transform 0.2s;
    position: absolute;
    top: 10px;
    right: 10px;

    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        background-color: ${({ $isFavorite }) => ($isFavorite ? "#ffcccc" : "#ddd")};
        transform: scale(1.1);
    }
`;