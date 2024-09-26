import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 100px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 100px;
  right: 105px;

  & > button {
    text-align: start;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: rgba(20, 124, 172, 0.3);
    }
  }
`;
