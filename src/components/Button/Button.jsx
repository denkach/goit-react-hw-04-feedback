import PropTypes from 'prop-types';
import { Component } from 'react';
import { FeedbackButton } from './Button.styled';

export class Button extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onBtnClick: PropTypes.func.isRequired,
  };

  render() {
    const { name, onBtnClick } = this.props;
    return (
      <FeedbackButton name={name} onClick={() => onBtnClick(name)}>
        {name}
      </FeedbackButton>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
