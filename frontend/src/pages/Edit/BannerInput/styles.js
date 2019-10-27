import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;

  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }

  img {
    max-width: 100%;
    background: #eee;
  }
  input {
    display: none;
  }
`;

export const ImageSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  height: 250px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  strong {
    color: rgba(255, 255, 255, 0.4);
  }
`;
