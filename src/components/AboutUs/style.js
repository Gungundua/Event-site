import styled from "styled-components";
const Wrapper = styled.div`
  .upper-about {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
  }
  .image {
    height: 550px;
    max-width: 600px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  .about {
    background-color: rgb(220, 203, 172);
    padding: 1rem;
    border-radius: 10px;
    // max-width: 400px;
    // height: 500px;
    width: 400px;
    color: #2F2F2F;
    margin-left: -50px;
  }
  .about h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  .about p {
    line-height: 1.6;
    font-size: 1.1rem;
    text-align: justify;
  }
  .founder {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin: 120px auto;
  width: 100%;
  max-width: 900px;
  padding: 0 20px;
}
@media (max-width: 768px) {
  .founder {
    flex-direction: column;
    gap: 40px;
    margin: 60px auto;
    width: 100%;
    max-width: 400px;
    padding: 0 10px;
  }
}
  .profile{
  border-radius: 50%;
  height: 200px;
  width: 200px;
  }
  .about-founder{
  font-size: 16px;
  }
  .founder-detial{
  color: #555;
  font-size: 19px;
  }
.founder-heading{
margin: 20px;
padding-left:20px;
color: #555;
}
.journey {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 40px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: -50px;
}
h4{
color: #B38639;
font-family: "Great Vibes", Sans-serif;
font-weight: 500;
font-size: 40px;
}
.heading {
font-family: "Great Vibes", Sans-serif;
// font-size: 50px;
font-weight: 500;
font-size: 40px;
word-spacing: 4px;
color: #B38639;
}
.journey-detial {
  color: #555;
  line-height: 1.6;
  font-size: 18px;
}
 .vision-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
  // margin-bottom: 20px;
  gap: 10px;
}
.vision {
  padding: 12px 20px;
  background-color: #B38639;
  color: white;
  font-size: 25px;
  text-align: center;
  max-width: 550px;
  font-weight: 500;
}
.vision-line {
  height: 1px;
  width: 270px;
  background-color: #B38639;
}
  @media (max-width: 768px) {
    .upper-about {
      flex-direction: column;
    }
    .about {
     width: 90%;
     margin: -20px -20px 20px 10px;
    }
    .image {
      width: 90%;
      height: 90%;
    }
    .heading {
      margin-top: -40px;
  }
    .journey-detial {
    font-size: ;
  }
    .vision-container {
    flex-direction: column;
    gap: 10px;
    margin: 60px 10px 30px 10px;
  }
  .vision-line {
    width: 60%;
    height: 1px;
  }
  .founder-heading, h4{
   margin-left: 70px;
  }
`
export default Wrapper