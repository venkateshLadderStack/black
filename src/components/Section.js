import React from "react"
import Home_img from "../images/home_img.png"
import * as home from "../styles/home.modules.css"
const Section = () => {
  return (
    <>
      <div className="container">
        <div className={home.section}>
          <div className={home.content}>
            <h1>LOREM ISPUM</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <img src={Home_img} width={550.45} height={412.83} alt="" />
        </div>
      </div>
    </>
  )
}

export default Section
