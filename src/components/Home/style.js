import styled from "styled-components";

const Wrapper = styled.section`
video{
object-fit: contain;
max-width: 100%;
height: auto;
display: block;
margin: 0 auto;
}

.section1{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 60%;
align-self: center;
margin: auto;
text-align: center;
}
.section2{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 95%;
align-self: center;
margin: auto;
text-align: center;
}
h1{
color: #ad844b;
font-size: 45px;
font-style: italic;
}
p{
color: #5d6e5e;
}
.carousel-container {
margin-top: 50px;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  padding: 2rem 0;
}

.carousel-track {
  display: flex;
  width: calc(200px * 6); /* 6 images * width */
  animation: scroll 5s linear infinite;
  gap: 80px;
}

.carousel-slide {
  flex: 0 0 auto;
  width: 200px;
  margin: 0 15px;
  border-radius: 10px;
  overflow: hidden;
}

.carousel-slide img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
.plan {
  padding: 60px 20px;
  background-color: #fffafc; /* Soft background */
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.plan-heading {
  font-size: 2.5rem;
  color: #ad844b; /* Elegant pink */
  margin-bottom: 10px;
}

.plan-para {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.cards > div {
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding: 35px;
  width: 200px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cards > div:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 15px;
}

.card-heading, .card-headings {
  font-size: 1.3rem;
  color: #ad844b;
  margin-bottom: 10px;
}

.card-para {
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }

}
/* Responsive */
@media (max-width: 768px) {
  .cards {
    flex-direction: column;
    align-items: center;
  }

  .plan-heading {
    font-size: 2rem;
  }

  .plan-para {
    font-size: 1rem;
  }

  .cards > div {
    width: 80%;
  }
}
  .hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-video {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(0.5);
}

.hero-overlay {
  text-align: center;
  color: white;
  padding: 20px;
  z-index: 1;
}

.hero-logo {
  width: 150px;
  margin-bottom: -70px;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: -20px;
  font-family: 'Georgia', serif;
}

.hero-subtitle {
  font-size: 1.8rem;
  margin-bottom: 15px;
  font-weight: 500;
}

.hero-text {
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 30px auto;
  line-height: 1.6;
  color: white;
}

.hero-button {
  background-color: ;
  color: black;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.hero-button:hover {
  background-color: #ad844b;
  
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
    line-height: 3;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-text {
    font-size: 1rem;
  }

  .hero-button {
    padding: 12px 25px;
    font-size: 0.9rem;
  }
}

`
export default Wrapper