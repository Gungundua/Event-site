import React from "react";
import { motion } from "framer-motion";
import Photo from "../assets/Photo.jpg";


import photo1 from "../assets/ankit.jpg";
import Wrapper from "./style.js";

// Animation Variants
const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const AboutUs = () => {
  return (
    <Wrapper>
      {/* Top Section with Slide-In Left and Right */}
      <div className="upper-about">
        <motion.img
          src={Photo}
          alt="Photo"
          className="image"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        />
        <motion.div
          className="about"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2>About Us</h2>
          <p>
            Welcome to the heart of celebration and creativity — welcome to
            Anshi Events. We’re dedicated to transforming your significant
            moments into cherished memories, with a steadfast focus on customer
            satisfaction and nurturing enduring relationships. Integrity,
            honesty, and the safeguarding of our clients reputations stand at
            the core of our approach. Our meticulously designed planning systems
            and procedures are tailored to provide a blend of professionalism
            and creativity, ensuring your needs always take precedence. In the
            journey of making special events unforgettable, our mission is to
            place your dreams at the heart of everything we do.
          </p>
        </motion.div>
      </div>

      {/* Journey Section */}
      <motion.div
        className="journey"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="heading">When did our journey begin?...</h1>
        <p className="journey-detial">
          With about 5 years of experience in the events industry, our founder
          Ankit Yadav decided to start his own venture Anshi Events in the year
          February 2024. Our mission is to bring people together through
          memorable events. Insight, empathy and a service-minded ethos lie at
          the core of the business.
        </p>
      </motion.div>

       <motion.div
        className="vision-container"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="vision-line"></div>
        <h1 className="vision">We Curate Special Moments into Memories</h1>
        <div className="vision-line"></div>
      </motion.div>

      {/* Founder Section */}
      <motion.div
        className="founder"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <img src={photo1} alt="photo1" className="profile" />
        </div>
        <div className="about-founder">
          <h5 className="founder-heading">About our Founder</h5>
          <h4>Yuvraj Yadav</h4>
          <p className="founder-detial">
            Welcome to the heart of celebration and creativity — welcome to
            Anshi Events. We’re dedicated to transforming your significant
            moments into cherished memories, with a steadfast focus on customer
            satisfaction and nurturing enduring relationships. Integrity,
            honesty, and the safeguarding of our clients reputations stand at
            the core of our approach.
          </p>
        </div>
      </motion.div>
      {/* Vision Section */}
    </Wrapper>
  );
};

export default AboutUs;
