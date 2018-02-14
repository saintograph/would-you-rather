import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import { getQuestions } from '../actions';

let Home = ({ questions }) => {
  return (
    <div style={{ marginTop: 20 }}>
      <Header as='h2'>Questions</Header>
      {Object.keys(questions).map((key) => {
        return (
          <Header as='h3' key={key}>
            <Link
              to={{
                pathname: '/question',
                state: { 
                  question_01: questions[key].optionOne.text,
                  question_02: questions[key].optionTwo.text
                }
              }}
            >
            {questions[key].optionOne.text} OR {questions[key].optionTwo.text}
            </Link>
          </Header>
        );
      })}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    questions: state.questions,
  }
}

export default Home = connect(mapStateToProps, null)(Home);
