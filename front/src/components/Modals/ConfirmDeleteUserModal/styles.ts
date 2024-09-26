import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  /* background: hsla(0, 0%, 50%, 0.5);
  background: rgba(0, 0, 0, 0.751); */
  background: rgba(18, 18, 20, 0.5);
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .modalBox {
    width: 380px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    position: relative;

    .close {
      position: absolute;
      top: 15px;
      right: 15px;
      z-index: 1;
      background-color: #eb5757;
      border: 1px solid black;
      border-radius: 5px;
      padding: 3px 5px;
    }

    .modalBody {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      gap: 30px;

      & > p {
        font-size: 20px;
      }
    }
  }

  .btns {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .btnYesNo {
      background-color: #59323f;
      display: inline-flex;
      gap: 10px;
      padding: 15px 22px;
      justify-content: center;
      border-radius: 4px;

      &.yes {
        background-color: rgba(20, 124, 172, 0.3);
      }

      &.no {
        background-color: rgba(20, 124, 172, 0.3);
      }

      &:hover {
        filter: brightness(1.1);
      }
    }
  }
`;
