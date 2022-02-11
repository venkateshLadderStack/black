import React from "react"
import posterImg from "../images/poster.png"
import * as poster from "../styles/poster.module.css"

function Poster() {
  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${posterImg})`,
          width: "auto",
          height: "456px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className={poster.contentWrapper}>
          <div
            className={poster.contentArea}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>LOREM ISPUM</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className={poster.green}>Our Story</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Poster
