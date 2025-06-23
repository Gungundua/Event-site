import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.section`
  .Navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 2rem; 
  -webkit-backdrop-filter: blur(10px);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0);
  background: rgba(236, 231, 225);
  backdrop-filter: blur(10px);
  height: 80px;
  
  @media (max-width: 768px){
  padding: 0.9rem 1rem;
  }
}

.Left {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(247, 243, 243, 0.85);
  padding: 0px;
  margin: 0;
}

.logo {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}

  .Right {
    display: flex;
    gap: 39px;
    list-style: none;
    margin: 0;
    padding-right: 70px;
    color:rgb(103, 64, 9);
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .Right li {
    cursor: pointer;
    position: relative;
    transition: color 0.3s ease;
  }

  .Right li::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    background: #b38639;
    bottom: -4px;
    left: 0;
    transition: width 0.3s ease;
  }

  .Right li:hover {
    color: #9c6c2a;
  }

  .Right li:hover::after {
    width: 100%;
  }

  /* === Hamburger Menu Button === */
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    position: sticky;
    gap: 5px;
    cursor: pointer;
    padding: 0.5rem;
    transition: transform 0.3s ease;
    z-index: 1;
  }

  .hamburger:hover {
    transform: scale(1.05);
  }

  .hamburger .bar {
    width: 26px;
    height: 3px;
    background-color: #b38639;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  /* === Responsive Styling === */
  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }

    .Right {
      position: absolute;
      top: 70px;
      right: 10px;
      //  left: 150px;
      height: auto;
      width: 200px;
      background: rgba(252, 251, 249, 0.98);
      flex-direction: column;
      align-items: center;
      display: none;
      padding: 1rem 0;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
      border-top: 1px solid #e0d6c1;
      animation: ${fadeIn} 0.3s ease;
      border-radius: 6px;
    }

    .Right.active {
      display: flex;
    }

    .Right li {
      padding: 0.8rem 0;
      width: 100%;
      text-align: center;
      font-size: 17px;
    }
  }
`;

export default Wrapper;