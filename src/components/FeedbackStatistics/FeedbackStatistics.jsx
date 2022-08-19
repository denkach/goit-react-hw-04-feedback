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
    const { good, neutral, bad } = this.props;

    return (
      <StatisticsContainer>
        <StatisticsText>
          Good:&nbsp;
          <span>{good}</span>
        </StatisticsText>
        <StatisticsText>
          Neutral:&nbsp;
          <span>{neutral}</span>
        </StatisticsText>
        <StatisticsText>
          Bad:&nbsp;
          <span>{bad}</span>
        </StatisticsText>
      </StatisticsContainer>
    );
  }
}
