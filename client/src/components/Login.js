import React from 'react';
import {
  useFormInput,
  registerFormTemplate
} from '../customHooks/useFormInput';
import axios from 'axios';

const Login = props => {
  const formInput = useFormInput(registerFormTemplate);

  const passwordInput = useFormInput('');

  //   let user = {
  //     username: usernameInput.value,
  //     password: passwordInput.value
  //   };
  //   console.log(' : user', user);

  const login = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:3300/api/auth/login`, formInput.value)
      .then(res => {
        localStorage.setItem('blabitty', res.data.token);
        props.history.push('/jokes');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      {/* <br />
      <br />
      <form>
        <label>
          Username:
          <input type='text' {...usernameInput} required minLength='4' />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input type='password' {...passwordInput} required minLength='4' />
        </label>
        <br />
        <button onClick={login}>Login</button>
      </form> */}
      <br />
      <br />
      <form>
        <label>
          Username:
          <input
            type='text'
            name='username'
            value={formInput.value.username}
            onChange={formInput.onChange}
            required
            minLength='4'
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={formInput.value.password}
            onChange={formInput.onChange}
            required
            minLength='4'
          />
        </label>
        <br />
        <button onClick={login}>Register</button>
      </form>
    </>
  );
};

export default Login;
