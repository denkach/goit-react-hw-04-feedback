import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button } from '../Button/Button';
import { FeedbackList } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { onClick } = this.props;

    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackList>
          <li>
            <Button name="good" onBtnClick={onClick} emoji="👍🏼"></Button>
          </li>
          <li>
            <Button name="neutral" onBtnClick={onClick} emoji="😐"></Button>
          </li>
          <li>
            <Button name="bad" onBtnClick={onClick} emoji="👎🏼"></Button>
          </li>
        </FeedbackList>
      </div>
    );
  }
}
