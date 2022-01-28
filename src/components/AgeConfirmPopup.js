import React from "react"
import useWindowSize from "../../hooks/useWindowSize"
import Logo from "../images/logo.png"
import SmallBg from "../images/bg2-mb.png"
import LargeBg from "../images/bg2.jpg"

const AgeConfirmPopup = ({ handleSubmitAge }) => {
  const { width } = useWindowSize()

  return (
    <>
      <div
        className="confirm"
        style={{
          backgroundImage: `url(${
            (width > 768 && LargeBg) || (width < 768 && LargeBg)
          })`,
        }}
      >
        <div className="confirmation">
          <a href="#">
            <img src={Logo} alt="Irish Logo" />
          </a>

          <div className="confirm-btn-part">
            <h3>ARE YOU Over 21?</h3>
            <div className="confirm-btn">
              <a href="#" className="yes-btn" onClick={handleSubmitAge}>
                Yes
              </a>
              <a
                href="#"
                className="no-btn"
                onClick={() => alert("Age need to be more than 21")}
              >
                No
              </a>
            </div>
          </div>
          <p>
            You must have cookies enabled to use this website. By entering this
            site you agree to our Terms & Conditions and Privacy.
          </p>
        </div>
      </div>
    </>
  )
}

export default AgeConfirmPopup
