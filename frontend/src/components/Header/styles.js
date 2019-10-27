import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;

    img {
      width: 32px;
      margin-right: 20px;
    }

    aside {
      display: flex;
      align-items: center;
    }
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
      font-size: 14px;
    }

    a {
      display: block;
      color: #fff;
      opacity: 0.6;
      font-size: 14px;
      text-decoration: none;
      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

export const Logout = styled.button`
  border: 0;
  border-radius: 4px;
  background: #f94d6a;
  /* height: 42px; */
  padding: 5px 15px;
  color: #fff;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.03, '#F94d6a')};
    color: #eee;
  }
`;
