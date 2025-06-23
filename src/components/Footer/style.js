import styled from "styled-components"
const Wrapper = styled.div`
.footer-wrapper {
  // min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.footer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(168, 129, 61);
  height: 80px;
  padding: 0px 40px -0px 40px;
  color:rgb(197, 194, 190);
  width: 100%;
  gap: 100px;
}
.center-icons {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
}
.content{
flex: 1;
}
.instagram, .linkedin {
  color: white;
  font-size: 20px;
}
.floating-popup-wrapper {
  position: relative;
}
.floating-popup {
  position: absolute;
  bottom: 70px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.circle-btn {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: none;
  background-color: #25D366;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}
.circle-btn:hover {
  transform: scale(1.1);
}
.footer p {
  // margin: 0;
  font-size: 12px;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 3px;
}
/* Mobile View */
@media (max-width: 768px) {
  .footer {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: auto;
    padding: 20px 20px 50px 0px;
  }
  .footer p {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
  }
  .center-icons {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    gap: 20px;
  }
}
`
export default Wrapper






