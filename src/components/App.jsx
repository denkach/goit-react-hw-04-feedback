import { Component } from 'react';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './FeedbackStatistics/FeedbackStatistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

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

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const totalFeedbacks = this.countTotalFeedback();
    return ((this.state.good / totalFeedbacks) * 100).toFixed(2) + '%';
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <Box padding="24px">
        <Box
          width="310px"
          padding="32px 24px"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          border="2px solid orange"
          borderRadius="8px"
        >
          <Section title="Options">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.updateState}
            />
          </Section>
          <Section title="Statistics">
            {totalFeedbacks === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedbacks}
                positivePercentage={positiveFeedbackPercentage}
              />
            )}
          </Section>
          <GlobalStyle />
        </Box>
      </Box>
    );
  }
}
