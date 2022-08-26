import PropTypes from 'prop-types';
import { FeedbackButton } from './Button.styled';

export const Button = ({ name, onBtnClick }) => {
  return (
    <FeedbackButton name={name} onClick={() => onBtnClick(name)}>
      {name}
    </FeedbackButton>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
