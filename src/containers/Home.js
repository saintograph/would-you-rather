import React from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

let Home = ({ questions }) => {
  return (
    <div style={{ marginTop: 20 }}>
      <Header as='h2'>Questions</Header>
      {Object.keys(questions).map((key) => {
        return (
          <Header as='h3' key={key}>
            {questions[key].optionOne.text} OR {questions[key].optionTwo.text}
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
