import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 940px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input,
    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      color: #fff;
      height: 50px;
      margin-bottom: 15px;
      padding: 5px 15px;
      font-size: 14px;
      width: 100%;
      &::placeholder {
        color: rgba(255, 255, 255, 0.3);
      }
    }

    textarea {
      height: 200px;
    }
    span {
      color: #ea6f91;
      align-self: flex-start;
      margin: 0 0 10px 5px;
      font-weight: bold;
    }
    > button {
      align-self: flex-end;
      padding: 5px 15px;
      border: 0;
      border-radius: 4px;
      background: #f94d6a;
      height: 50px;
      color: #fff;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.08, '#F94d6a')};
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
