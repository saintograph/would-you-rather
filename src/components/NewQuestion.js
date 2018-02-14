import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Button, Checkbox, Form } from 'semantic-ui-react'
import { addQuestion } from '../actions'
import { generateGUID } from '../utils/helpers'

class NewQuestion extends Component {
  constructor() {
    super();
    this.state = {
      questionOne: '',
      questionTwo: '',
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value })
  }

  submitQuestion = (event) => {
    event.preventDefault();
    const id = generateGUID();
    const question = {
      [id]: {
        author: "Random Person",
        id,
        timestamp: Date.now(),
        optionOne: {
          votes: [],
          text: this.state.questionOne,
        },
        optionTwo: {
          votes: [],
          text: this.state.questionTwo,
        }
      }
    }
    this.props.newQuestionDispatch(question)
  }
  render() {
    const { state, handleChange, submitQuestion } = this;
    const { questionOne, questionTwo } = state;
    return (
      <div style={{ marginTop: 20 }}>
        <Header as='h2'>Would you rather</Header>
        <Form onSubmit={submitQuestion}>
          <Form.Field>
            <input
              type="text"
              placeholder='Eat a bug.'
              name="questionOne"
              value={questionOne}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>OR</label>
            <input
              type="text"
              placeholder='Swallow a worm.'
              name="questionTwo"
              value={questionTwo}
              onChange={handleChange}
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    newQuestionDispatch: (question) => { 
      dispatch(addQuestion(question));
    }
  }
}

export default NewQuestion = connect(mapStateToProps, mapDispatchToProps)(NewQuestion);