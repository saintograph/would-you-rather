import React from 'react';
import { Card, Image } from 'semantic-ui-react';

let ProfileCards = ({ name, image, id }) => {
  return (
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src={image} />
        <Card.Header>
          {name}
        </Card.Header>
        <Card.Meta>
          {id}
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default ProfileCards;
