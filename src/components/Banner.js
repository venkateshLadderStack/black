import React from "react"
import bannerImg from "../images/banner_img.png"
import sign_img from "../images/signature.png"
import Button from "./Button"
import * as banner from "../styles/banner.module.css"

const Banner = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${bannerImg})`,
          width: "auto",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className={banner.contentArea}>
          <div className={banner.content}>
            <img src={sign_img} width={390} height={163} alt="" />
            <div className="d-flex flex-row">
              <Button name="Learn more" />
              <Button classN="green" name="Where to Find Us" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
