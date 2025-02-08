import { useState, useLayoutEffect } from 'react'

export const MainPage = () => {
  const [devsData, setDevsData] = useState([]);

  useLayoutEffect(() => {
    fetch('http://localhost:3005/devs')
      .then((res) => res.json())
      .then((data) => setDevsData(data));
  }, []);

  return (
    <main>
      {devsData.map((dev) => (
        <div key={dev.id}>
          <p>{dev.name}</p>
        </div>
      ))}
    </main>
  );
};
