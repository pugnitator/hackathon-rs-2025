import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';

export const MainPage = () => {
  const [devsData, setDevsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3005/devs')
      .then((res) => res.json())
      .then((data) => setDevsData(data));
  }, []);

  return (
    <main>
      <ItemList itemList={devsData}/>
    </main>
  );
};
