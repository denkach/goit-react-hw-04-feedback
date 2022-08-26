import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { FeedbackList, FeedbackItem } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map((name, index) => {
        return (
          <FeedbackItem key={index}>
            <Button name={name} onBtnClick={onLeaveFeedback}>
              {name}
            </Button>
          </FeedbackItem>
        );
      })}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
