import styled from 'styled-components';

export const FeedbackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  padding: 8px 24px;
  color: #fff;
  background-color: orange;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 250ms linear, border 250ms linear,
    color 250ms linear;

  :hover {
    color: orange;
    background-color: #fff;
    border: 1px solid orange;
  }
`;
