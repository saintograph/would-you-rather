import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ProfileCards } from '../components';

let LeaderBoard = ({ users }) => {
  return (
    <div style={{ marginTop: 20 }}>
      {Object.keys(users).map((key) => {
        return (
          <ProfileCards
            key={key}
            id={users[key].id}
            name={users[key].name}
            image={users[key].avatarURL}
          />
        );
      })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    users: state.users,
  }
}

export default LeaderBoard = connect(mapStateToProps, null)(LeaderBoard);
