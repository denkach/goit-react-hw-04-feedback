import { useState } from 'react';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './FeedbackStatistics/FeedbackStatistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateState = name => {
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        console.log('Unknown state: ' + name);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = countTotalFeedback();
    return ((good / totalFeedbacks) * 100).toFixed(2) + '%';
  };

  const totalFeedbacks = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

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
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={updateState}
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
};
