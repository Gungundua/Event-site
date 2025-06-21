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
            <FaInstagram className="instagram" />
            <RiLinkedinLine className="linkedin" />
          </div>
          <div className="floating-popup-wrapper">
            {showPopup && (
              <div className="floating-popup">
                <a href="tel:1234567890" className="circle-btn phone">
                  <MdPhone size={24} />
                </a>
                <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="circle-btn whatsapp">
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