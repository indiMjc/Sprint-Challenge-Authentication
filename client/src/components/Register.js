import React from 'react';
import {
  useFormInput,
  registerFormTemplate
} from '../customHooks/useFormInput';
import axios from 'axios';

const Register = props => {
  const formInput = useFormInput(registerFormTemplate);

  const register = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:3300/api/auth/register`, formInput.value)
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
        <button onClick={register}>Register</button>
      </form>
      {/* <br />
      <br />
      <form>
        <label>Username:</label>
        <input
          type='text'
          name='username'
          //   value={inputs.username}
          onChange={handleInputChange}
          {...inputs.username}
          required
          minLength='4'
        />
        <br />
        <br />
        <label>Password:</label>
        <input
          type='password'
          name='password'
          //   value={inputs.password}
          //   onChange={handleInputChange}
          {...inputs}
          required
          minLength='4'
        />
        <br />
        <button onClick={handleSubmit}>Register</button>
      </form> */}
    </>
  );
};

export default Register;
