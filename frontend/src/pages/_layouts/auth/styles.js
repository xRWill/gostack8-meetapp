import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  min-height: 100%;
  background: linear-gradient(-180deg, #22202c, #402845);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      color: #fff;
      height: 50px;
      margin-bottom: 15px;
      padding: 5px 15px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.3);
      }
    }
    span {
      color: #ea6f91;
      align-self: flex-start;
      margin: 0 0 10px 5px;
      font-weight: bold;
    }
    button {
      border: 0;
      border-radius: 4px;
      background: #f94d6a;
      height: 50px;
      color: #fff;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#F94d6a')};
      }
    }
    a {
      color: #fff;
      opacity: 0.7;
      margin-top: 15px;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
