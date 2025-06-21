import React from 'react'
import video from '../assets/videoplayback.mp4'
import weeding1 from "../assets/weeding1.jpg";
import weeding2 from "../assets/weeding2.jpg";

import weeding3 from "../assets/weeding3.jpg";
import weeding4 from "../assets/weeding4.jpg";
import cor1 from "../assets/cor1.jpg";
import cor2 from "../assets/cor2.jpg";
import cor3 from "../assets/cor3.jpg";
import cor4 from "../assets/cor4.jpg";
import cor5 from "../assets/cor5.jpg";
import consultation from "../assets/counciling.png";
import logo from "../assets/Logo.png";
import budget from "../assets/finance.png";
import venue from "../assets/location.png";
import coordination from "../assets/coordination.png";
import execution from "../assets/administration.png";
import Wrapper from './style'
import {  useNavigate } from 'react-router';
export default function index() {
  const navigate = useNavigate();

  return (
    <Wrapper>
    <div className="FrontPage">
            <div className="hero">
  <video className="hero-video" src={video} autoPlay loop muted />
  <div className="hero-overlay">
    {/* <img src={logo} alt="logo" className="hero-logo" /> */}
    <h1 className="hero-title">Anshi Events</h1>
    <h2 className="hero-subtitle">Your Moment, Our Royal Touch</h2>
    <p className="hero-text">
      From traditional Indian weddings to corporate events, we bring your dreams to life with unmatched elegance and attention to detail.
    </p>
    <button className="hero-button" onClick={()=> navigate('/contact')}>
      Plan Your Event <span></span>
    </button>
  </div>
</div>
    {/* <video src={video} autoPlay loop muted></video> */}
    </div>
    <div className='section1'>
      <h1>Weddings</h1>
      <p>Envision the wedding of your dreams against the backdrop of the white sandy beaches of Goa?​. This is what we can do for you! Our specialization lies in creating once-in-a-lifetime experiences not only for the treasured couple but also for their special guests.</p>
      <p>Our events leave attendees with cherished memories with their nearest and dearest. Collaborating with clients who want to share unforgettable moments with their family and friends is a priviledge we truly embrace.</p>
      <div className="carousel-container">
      <div className="carousel-track">
        {[weeding1, weeding2 ,weeding3 ,weeding4 ,weeding1].map((img, index) => (
          <div className="carousel-slide" key={index}>
            <img className="images"src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
    <div className='section2'>
      <h1>Corporate</h1>
      <p>Elevate leadership with strategic corporate events, fostering colloboration and culture. Employees feel appreciated and build stronger connections when they come together, resulting in an enhanced quality of work. Our events are meticulously planned so as to spark creativity that contributes to company success.</p>
      <p>Choose us as your partner to educate employees or clients, promote brand awareness, celebrate achievements, boost employee morale, strengthen team dynamics, facilitate networking, or launch a new product or service.</p>       
    <div className="carousel-container">
      <div className="carousel-track">
        {[cor1,cor2,cor3,cor4,cor5].map((img, index) => (
          <div className="carousel-slide" key={index}>
            <img className="images" src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
    <div className='plan'>
 <h1 className='plan-heading'>Plan Your Wedding in Just 5 Simple Steps</h1>
 <p className='plan-para'>Our streamlined process ensures your dream wedding becomes reality with minimal stress and maximum joy.</p>
      <div className='cards'>
        <div className='card1'>
          <img src={consultation} alt="" className='card-image'/>
          <h1 className='card-headings'>Initial Consultation</h1>
          <p className='card-para'>Share your vision and requirements with our expert planners</p>
        </div>
        <div className='card2'>
          <img src={budget} alt="" className='card-image' />
          <h1 className='card-heading'>Budget & Timeline</h1>
          < p className='card-para'> Create a realistic budget and timeline for your perfect event</p>
        </div>
        <div className='card3'>
          <img src={venue} alt="" className='card-image' />
          <h1 className='card-heading'>Venue Selection</h1>
          <p className='card-para'>Choose from our curated list of premium venues</p>
        </div>
        <div className='card4'>
          <img className='card-image' src={coordination} alt="" />
          <h1 className='card-heading'>Vendor Coordination</h1>
          <p className='card-para'>We handle all vendor bookings and coordination</p>
        </div>
        <div className='card5'>
          <img className="card-image"src={execution} alt="" />
          <h1 className='card-heading'>Event Execution</h1>
          <p className='card-para'>Sit back and enjoy your perfectly planned celebration</p>
        </div>
      </div>
    </div>
    </Wrapper>
  )
}