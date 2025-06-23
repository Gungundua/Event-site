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
  background-color: rgb(255, 255, 255);
  font-family: 'Segoe UI', sans-serif;
  overflow-x: hidden; /* 💥 Prevent horizontal scroll */
  width: 100%;

  .ourServices {
    width: 100%;
    object-fit: contain;
    height: auto;
    margin-top: 80px;
  }

  .heading {
    font-family: "Great Vibes", Sans-serif;
    color: #B38639;
    font-size: 50px;
    font-weight: 500;
    text-align: center;
    margin: 40px;
  }

  .services {
    display: grid;
    grid-template-columns: repeat(4, minmax(150px, 1fr));
    gap: 40px;
    justify-items: center;
    box-sizing: border-box;
    padding: 0 20px;
  }

  .service-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease;
    cursor: pointer;
    opacity: 0;

    &:hover {
      transform: scale(1.2); /* 🔧 Reduced scale to avoid overflow */
    }

    .icon-wrapper {
      position: relative;
      height: 100px;
      width: 100px;
      margin-bottom: 10px;
    }

    .icon-background {
      background-color: rgb(244, 240, 229);
      border-radius: 50%;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    img {
      height: 60px;
      width: 60px;
      object-fit: contain;
      z-index: 2;
      position: relative;
      margin: 20px;
    }

    p {
      font-size: 14px;
      color: #111;
      margin-top: 5px;
      letter-spacing: 0.5px;
      font-weight: 500;
    }
  }

  .service-item:nth-child(-n+4) {
    animation: ${slideInLeft} 0.7s ease forwards;
  }

  .service-item:nth-child(n+5) {
    animation: ${slideInRight} 0.7s ease forwards;
  }

  @media (max-width: 600px) {
    .heading {
      font-size: 24px;
      margin: 20px;
    }

    .services {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      padding: 0 10px;
    }

    .icon-wrapper {
      height: 80px;
      width: 80px;
    }

    img {
      height: 50px;
      width: 50px;
    }

    p {
      font-size: 12px;
    }
  }
`

export default Wrapper