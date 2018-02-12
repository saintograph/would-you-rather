import React from 'react';
import { Route } from "react-router-dom";
import { Home, LeaderBoard } from '../containers';

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={ Home } />
      <Route path="/leaderboard" component={ LeaderBoard } />
    </div>
  )
}

export default Routes;
