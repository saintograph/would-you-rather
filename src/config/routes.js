import React from 'react';
import { Route } from "react-router-dom";
import { Home, LeaderBoard } from '../containers';
import { NewQuestion, QuestionCard } from '../components'

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={ Home } />
      <Route path="/leaderboard" component={ LeaderBoard } />
      <Route path="/new" component={ NewQuestion } />
      <Route path="/question" component={ QuestionCard } />
    </div>
  )
}

export default Routes;
