import { useState, useLayoutEffect } from 'react'
import { MembersList } from '../../components/members-list.jsx'

export const MainPage = () => {
  const [devsData, setDevsData] = useState([]);

  useLayoutEffect(() => {
    fetch('http://localhost:3005/devs')
      .then((res) => res.json())
      .then((data) => setDevsData(data));
  }, []);

  return (
    <main>
      <MembersList membersList={devsData}/>
    </main>
  );
};
