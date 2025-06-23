import { useState, useEffect } from "react"
import Wrapper from "./style"
import { FaInstagram } from "react-icons/fa"
import { RiLinkedinLine } from "react-icons/ri"
import { TbMessageChatbot } from "react-icons/tb"
import { RxCross2 } from "react-icons/rx"
import { FaWhatsapp } from "react-icons/fa"
import { MdPhone } from "react-icons/md"
const Footer = () => {
  const [showPopup, setShowPopup] = useState(false)
  const togglePopup = () => setShowPopup(!showPopup)
  const closePopup = () => setShowPopup(false)
  return (
    <Wrapper>
      <div className="footer-wrapper">
        <div className="footer">
          <div className="spacer" />
          <div className="center-icons">
           <a
  href="https://www.instagram.com/anshi_hospitality_and_events?igsh=aWl4Y3pzbmEzN2M4"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaInstagram className="instagram" />
</a>

<a
  href="https://www.linkedin.com/in/yuvraj-yadav-991748333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  target="_blank"
  rel="noopener noreferrer"
>
  <RiLinkedinLine className="linkedin" />
</a>

          </div>
          <div className="floating-popup-wrapper">
            {showPopup && (
              <div className="floating-popup">
                <a href="tel:6376444353" className="circle-btn phone">
                  <MdPhone size={24} />
                </a>
                <a href="https://wa.me/6376444353" target="_blank" rel="noopener noreferrer" className="circle-btn whatsapp">
                  <FaWhatsapp size={24} />
                </a>
                <button className="circle-btn close" onClick={closePopup}>
                  <RxCross2 size={24} color="white" />
                </button>
              </div>
            )}
            {!showPopup && (
              <div className="circle-btn main" onClick={togglePopup}>
                <TbMessageChatbot color="white" size={30} />
              </div>
            )}
          </div>
          <p>© 2024 Anshi Events. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </Wrapper>
  )
}
export default Footer