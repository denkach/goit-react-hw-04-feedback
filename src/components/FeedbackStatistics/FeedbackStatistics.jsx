import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  StatisticsContainer,
  StatisticsText,
} from './FeedbackStatistics.styled';

export class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <StatisticsContainer>
        <StatisticsText>
          Good:&nbsp;
          <span>{good}</span>
          &nbsp;👍🏼
        </StatisticsText>
        <StatisticsText>
          Neutral:&nbsp;
          <span>{neutral}</span>
          &nbsp;😐
        </StatisticsText>
        <StatisticsText>
          Bad:&nbsp;
          <span>{bad}</span>
          &nbsp;👎🏼
        </StatisticsText>
        <StatisticsText>
          Total:&nbsp;
          <span>{total}</span>
          &nbsp;✅
        </StatisticsText>
        <StatisticsText>
          Positive feedback:&nbsp;
          <span>{positivePercentage}</span>
        </StatisticsText>
      </StatisticsContainer>
    );
  }
}
