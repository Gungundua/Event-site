import styled, { keyframes } from "styled-components"

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const Wrapper = styled.section`
  min-height: 100vh;
  padding: 40px 20px;
  font-family: 'Segoe UI', sans-serif;
  background-color: #fff;
  margin-top: 58px;
  overflow-x: hidden;
  box-sizing: border-box;

  .sections {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
    margin-top: 30px;
  }

  .getintouch {
    flex: 1;
    min-width: 300px;
    border: 5px solid #884D26;
    padding: 30px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    animation: ${slideInLeft} 0.7s ease forwards;
    box-sizing: border-box;
  }

  .getintouch h1 {
    font-size: 32px;
    margin-bottom: 20px;
    color: #222;
  }

  .section1 {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .info p {
    margin: 15px 0;
    font-size: 16px;
    color: #333;
    line-height: 1.5;
  }

  .info i {
    color: #884D26;
    margin-right: 10px;
  }

  .map {
    margin-top: 20px;
    width: 100%;
    max-width: 100%;

    iframe {
      width: 100%;
      height: 300px;
      border: none;
    }
  }

  .connectform {
    flex: 1;
    min-width: 300px;
    animation: ${slideInRight} 0.7s ease backwards;
    box-sizing: border-box;
  }

  .connectform h2 {
    font-size: 32px;
    margin-bottom: 20px;
    color: #222;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .double-inputs {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    box-sizing: border-box;
  }

  .double-inputs input {
    flex: 1;
  }

  button,
  .submitbtn {
    width: 130px;
    padding: 10px 20px;
    background-color: #884D26;
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    align-self: flex-start;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #6E3C1C;
    }
  }

  @media screen and (max-width: 487px) {
    padding: 20px;

    .sections {
      flex-direction: column;
    }

    .double-inputs {
      flex-direction: column;
    }

    .getintouch,
    .connectform {
      padding: 20px;
      width: 100%;
    }

    .map {
      iframe {
        height: 200px;
      }
    }

    .connectform h2,
    .getintouch h1 {
      font-size: 26px;
      text-align: center;
    }

    .submitbtn {
      width: 70%;
      align-self: center;
    }

    input,
    textarea {
      font-size: 15px;
    }
  }
`

export default Wrapper
