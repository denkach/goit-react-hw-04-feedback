import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button } from '../Button/Button';
import { FeedbackList } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <FeedbackList>
        {options.map((name, index) => {
          return (
            <li key={index}>
              <Button name={name} onBtnClick={onLeaveFeedback}>
                {name}
              </Button>
            </li>
          );
        })}
      </FeedbackList>
    );
  }
}
