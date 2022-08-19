import { Component } from 'react';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './FeedbackStatistics/FeedbackStatistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Box padding="24px">
        <Box
          width="320px"
          padding="24px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          border="2px solid orange"
          borderRadius="8px"
        >
          <FeedbackOptions onClick={this.updateState} />
          <Statistics good={good} neutral={neutral} bad={bad} />
          <GlobalStyle />
        </Box>
      </Box>
    );
  }
}
