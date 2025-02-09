import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs({ userName }) {
  const location = useLocation();
  const previousPage = location.state.from;
  console.log(previousPage)

  return (
    <BreadcrumbsContainer>
      <Link to={previousPage}>
        {previousPage === "/" ? "Главная" : "Избранное"}
      </Link>{" "}
      / <span>{userName || "пользователя"}</span>
    </BreadcrumbsContainer>
  );
}

const BreadcrumbsContainer = styled.nav`
  font-size: 20px;
  margin-bottom: 20px;
  color: black;

  a {
    text-decoration: none;
    color: inherit;

    &: hover{
        color: #6C63FF;
    }
  }
`;
