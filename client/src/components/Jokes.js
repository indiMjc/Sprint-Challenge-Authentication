import React, { useEffect, useState } from 'react';
import { authAxios } from '../util/authAxios';

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    authAxios()
      .get(`http://localhost:3300/api/jokes`)
      .then(res => {
        setJokes(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      {jokes.map(i => (
        <p key={i.id}>{i.joke}</p>
      ))}
    </>
  );
};

export default Jokes;
