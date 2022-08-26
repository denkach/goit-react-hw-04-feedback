import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  StatisticsText,
} from './FeedbackStatistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
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
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
