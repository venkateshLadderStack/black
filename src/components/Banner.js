import React from "react"
import bannerImg from "../images/banner_img.png"
import sign_img from "../images/signature.png"
import Button from "./Button"
import * as banner from "../styles/banner.module.css"
import video from "../images/homepage_video.mp4"
import "../../node_modules/video-react/dist/video-react.css"
import { ControlBar, Player } from "video-react"
const Banner = () => {
  return (
    <>
      <div className={banner.vedioArea}>
        <Player
          fluid={false}
          poster={bannerImg}
          muted
          autoPlay={true}
          src={video}
          loop
        >
          <ControlBar disableCompletely autoHide={true} />
        </Player>
      </div>
      <div className={banner.contentArea}>
        <div className={banner.content}>
          <div className="ms-5">
            <img src={sign_img} width={330} height={163} alt="" />
          </div>
          <div className={banner.button}>
            <div className="me-3">
              <Button name="Learn more" />
            </div>
            <Button classN="green" name="Where to Find Us" />
          </div>
        </div>
      </div>
      {/* <div
        style={{
          position: "relative",
          backgroundImage: `url(${bannerImg})`,
          width: "auto",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div> */}
      {/* <div
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
            <div className="ms-5">
              <img src={sign_img} width={330} height={163} alt="" />
            </div>
            <div className={banner.button}>
              <div className="me-3">
                <Button name="Learn more" />
              </div>
              <Button classN="green" name="Where to Find Us" />
            </div>
          </div>
        </div>
      </div> */}
      {/* <video className={banner.bg_video} muted={false} autoPlay>
        <source src={video} type="video/mp4" />
      </video>
      <div className={banner.bg_video}>
        <iframe
          src={video}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div> */}
    </>
  )
}

export default Banner
