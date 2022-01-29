import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return (
          <div class="nav">
              <ul>
                 <li><a href="#home">Home</a></li>
                 <li><a href="#contact">Contact</a></li>
                 <li><a href="#about">About</a></li>
              </ul>
          </div>
        );
    }
}