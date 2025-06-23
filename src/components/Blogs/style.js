import styled from "styled-components";
const Wrapper = styled.div`
  .image {
    width: 100%;
    object-fit: contain;
    height: auto;
  }
  .latest-blog {
    font-family: "Great Vibes", Sans-serif;
    font-size: 50px;
    font-weight: 500;
    font-style: italic;
    text-decoration: none;
    -webkit-text-stroke-color: #000;
    stroke: #000;
    color: #B38739;
    text-align: center;
    margin: 40px;
  }
  .card {
    width: 18rem;
     border: 8px solid rgb(210, 171, 103);
  }
  .card-body{
  background-color:rgb(210, 171, 103);
   }
  .custom-btn {
    background-color: #B38739;
    border-color: #B38739;
  }
  .container {
    border-color: #B38739;
  }
    .card-text{
    font-weight: 400;
    }
    .card-img-top {
  width: 100%;
  height: 250px;         /* You can adjust this as needed */
  object-fit: cover;
  display: block;
}

  @media (max-width: 768px){
  .row{
  margin-left: 40px;
  }}
`;
export default Wrapper;