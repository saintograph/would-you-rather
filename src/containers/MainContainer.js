import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Header } from '../components';

class Main extends Component {
  render() {
    return (
      <Container style={{ marginTop: 35 }}>
        <Header />
        {this.props.children}
      </Container>
    )
  }
}

export default Main;