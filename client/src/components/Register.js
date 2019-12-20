import React, { useState } from 'react';
import axios from 'axios';

const Register = props => {
  const [user, setuser] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const register = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:3300/api/auth/register`, user)
      .then(res => {
        localStorage.setItem('blabitty', res.data.token);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <br />
      <br />
      <form>
        <label>
          Username:
          <input
            type='text'
            name='username'
            value={user.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
        </label>
      </form>
      <br />
      <button onClick={register}>Register</button>
    </>
  );
};

export default Register;
