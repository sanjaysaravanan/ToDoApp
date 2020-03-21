import React, { Component } from 'react';
import SecondComponent from './SecondComponent';

// Class Component
export default class Application extends Component {
    render() {
      return (
        <div className="application">
          Hello World By Sanjay Saravanan
          <SecondComponent />
        </div>
      );
    }
  }
