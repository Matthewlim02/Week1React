import React from 'react';
import Navigation from './navigation';

export default class loginForm extends React.Component {
    render() {
        return (
        <div>
            <Navigation/>
            <h3>Log In</h3>
          <div className="loginForm">
           <form className="form">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
           <div className="input-group">
             <label htmlFor="password">Password</label>
             <input type="password" name="password" placeholder="password" />
           </div>
            <button className="Info">Log In</button>
           </form>
          </div>
        </div>
        );
    }
}