import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Jokes from './components/Jokes';

function App() {
  return (
    <div className='App'>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
      <Link to='jokes'>Jokes</Link>
      <Route path='/login' render={props => <Login {...props} />} />
      <Route path='/register' render={props => <Register {...props} />} />
      <Route path='/jokes' render={props => <Jokes {...props} />} />
    </div>
  );
}

export default App;
