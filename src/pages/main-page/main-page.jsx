import { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { MembersList } from '../../components/members-list.jsx';
import { Header } from '../../components/header.jsx';
import backgroundImage from '../../assets/image-2-2.jpg';
import styled from 'styled-components';

const MainPageContainer = ({ className }) => {
  const [devsData, setDevsData] = useState([]);

  useLayoutEffect(() => {
    fetch('http://localhost:3005/devs')
      .then((res) => res.json())
      .then((data) => setDevsData(data));
  }, []);

  return (
    <main className={className}>
      <section className="main-page-info">
        <Header />
        <img
          className="background-image"
          src={backgroundImage}
          alt="background photo"
        />
        <div className="marketing-tricks">
          <h2>Веб-разработчики</h2>
          <ul className="list-tricks">
            <li>Живем рядом.</li>
            <li>Приедем быстро.</li>
            <li>Пенсионерам скидки.</li>
          </ul>
        </div>
      </section>
      <section className="devs-info">
        <h2 className="team-info">Наша Команда</h2>
        <div className='developers'>
        <MembersList membersList={devsData} />
        </div>
      </section>
    </main>
  );
};
export const MainPage = styled(MainPageContainer)`
  & .main-page-info {
    width: 100vw;
    height: 100vh;
    position: relative;
  }


  & .marketing-tricks {
    position: absolute;
    left: 100px;
    top: 250px;
  }

  & h2 {
    font-size: 50px;
    margin-bottom: 50px;
  }

  & .list-tricks {
    list-style: none;
    font-size: 40px;
    text-align: left;
  }

  & .background-image {
    transform: scaleX(-1);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  & .devs-info {
    width: 100vw;
    height: 100vh;
    position: relative;
  }

  & .team-info {
    position: absolute;
    font-size: 36px;
    left: 100px;
    top: 20px;
    color: #6c63ff;
  }

  & .developers {
    display: flex;
    padding: 120px;
  }

`;

MainPageContainer.propTypes = {
  className: PropTypes.string,
};
