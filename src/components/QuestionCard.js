import React from 'react';
import { Button, Card } from 'semantic-ui-react'

const QuestionCard = (props) => {
  console.log(props.location.state)
  return (
    <div style={{ marginTop: 20 }}>
      <Button.Group>
        <Button>{props.location.state.question_01}</Button>
        <Button.Or />
        <Button>{props.location.state.question_02}</Button>
      </Button.Group>
    </div>
  )
}

export default QuestionCard;
