import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Header = () => {
  return (
    <div>
        <Link to={'/'}><Button content='HOME' basic /></Link>
        <Link to={'/leaderboard'}><Button content='LEADERBOARD' basic /></Link>
        <Link to={'/new'}><Button content='ADD QUESTION' basic /></Link>
    </div>
  )
}

export default Header;
