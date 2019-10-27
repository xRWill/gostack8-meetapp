import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 940px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  width: 100%;
  margin: 30px 0;

  strong {
    font-size: 32px;
  }

  button {
    border: 0;
    border-radius: 4px;
    background: #f94d6a;
    font-size: 16px;
    padding: 5px 15px;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    display: flex;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#F94d6a')};
      color: #eee;
    }
  }
`;

export const MeetupList = styled.div``;

export const Meetup = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.7;
    background: rgba(0, 0, 0, 0.3);
  }

  & + & {
    margin-top: 5px;
  }

  strong {
    color: #eee;
    font-size: 18px;
  }
  div {
    text-align: right;
    display: flex;
    align-items: center;

    time {
      color: #ccc;
      font-size: 14px;
      margin-right: 10px;
    }
  }
`;
