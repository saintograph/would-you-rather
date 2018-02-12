import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

const ProfileCards = () => {
    return (
      <Card>
        <Card.Content>
          <Image floated='right' size='mini' src='https://tylermcginnis.com/would-you-rather/tyler.jpg' />
          <Card.Header>
            Steve Sanders
          </Card.Header>
          <Card.Meta>
            Friends of Elliot
          </Card.Meta>
        </Card.Content>
      </Card>
    )
}

export default ProfileCards;
