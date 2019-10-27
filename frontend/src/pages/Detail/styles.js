import styled from 'styled-components';
import { darken } from 'polished';

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
  div {
    justify-content: space-between;
    display: flex;
    max-height: 42px;
  }
`;

export const Edit = styled.button`
  border: 0;
  border-radius: 4px;
  background: #4dbaf9;
  font-size: 16px;
  padding: 5px 15px;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-right: 10px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#4DBAF9')};
    color: #eee;
  }
`;
export const Cancel = styled.button`
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
`;

export const Meetup = styled.div`
  img {
    width: 100%;
    max-width: 940px;
    margin-bottom: 30px;
  }
`;

export const Description = styled.div`
  color: #aaa;
  div {
  }
`;
export const Appointment = styled.div`
  margin-top: 30px;
  color: #666;
  font-size: 14px;
  time {
    margin-right: 20px;
  }
`;
