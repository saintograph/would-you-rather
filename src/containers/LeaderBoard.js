import React, { Component } from 'react';
import { ProfileCards } from '../components';

class LeaderBoard extends Component {
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
      </div>
    );
  }
};

export default LeaderBoard;
