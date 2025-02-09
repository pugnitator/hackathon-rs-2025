import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getUser } from "../../api/index.js";
import { Sidebar } from "./components/sidebar/sidebar.jsx";
import { MainContent } from "./components/main-content/main-content.jsx";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs.jsx";

export const MemberPage = () => {
  const [user, setUser] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUser(params.id)
      .then((loadedUser) => loadedUser && setUser(loadedUser))
      .catch((error) => {
        console.error(error);
        navigate("/member-not-exist");
      });
  }, [params.id, navigate]);

  useEffect(() => {
    if (user?.lastname && user?.name) {
      document.title = `${user.lastname} ${user.name}`;
    }
  }, [user?.lastname, user?.name]);

  return (
    <MemberPageContainer>
      <BreadcrumbsContainer>
        <Breadcrumbs userName={user.name} />
      </BreadcrumbsContainer>
      <Profile>
        <Sidebar {...user} />
        <MainContent {...user} />
      </Profile>
    </MemberPageContainer>
  );
};

const MemberPageContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-atems: center;
  padding: 20px;
  font-weight: 400;
`;

const Profile = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BreadcrumbsContainer = styled.div`
  align-self: start;
`;
