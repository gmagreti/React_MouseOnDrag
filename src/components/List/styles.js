import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${(props) => (props.done ? 0.6 : 1)};
  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }
  header {
    display: flex;
    flex-direction: column;
    height: 42px;
    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;

      display: flex;
      justify-content: space-between;

      span {
        color: #ffffff;
        padding: 5px 10px;
        border-radius: 50%;
        background: #3b5bfd;
      }
    }
    button {
      width: 100%;
      height: 42px;
      margin-top: 20px;
      border-radius: 5px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }
  ul {
    margin-top: 40px;
  }
`;
