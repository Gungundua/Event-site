import styled , { keyframes }from "styled-components";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


const Wrapper = styled.section`
  padding: 40px 20px;
  font-family: 'Segoe UI', sans-serif;
  background-color: #fff;
  margin-top: 78px;
  

  .sections {
    display: flex;

    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
    margin-bottom: 80px;
  }


  .getintouch {
    flex: 1;
    min-width: 300px;
    border: 5px solid #884d26;
    padding: 30px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    animation: ${slideInLeft} 0.7s ease forwards;
  }

  .getintouch h1 {
    font-size: 32px;
    margin-bottom: 20px;
    color: #222;
  }

  .info p {
    margin:15px 0;
    font-size: 16px;
    color: #333;
    line-height: 1.5;
    
  }

  .info i {
    color: #884d26;
    margin-right: 10px;
  }

  .connectform {
  flex: 1;
  min-width: 300px;
  animation: ${slideInRight} 0.7s ease backwards;
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
  }

  .double-inputs input {
    flex: 1;
  }

  button,
  .submitbtn {
    width: 130px;
    padding: 10px 20px;
    background-color: #884d26;
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    align-self: flex-start;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #6e3c1c;
    }
  }

  /* 📱 Mobile Styles */
  @media screen and (max-width: 760px) {
    .sections {
      flex-direction: column;
    }

    .double-inputs {
      flex-direction: column;
    }

    .getintouch, .connectform {
      padding: 20px;
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
`;

export default Wrapper;
