import React from "react"
import ArrowDown from "../../images/Vector.svg"

const Hero = ({ heroImage, isHero = true }) => {
  return (
    <section style={{ overflow: "hidden" }}>
      <div className="row">
        <div className="col-12 hero_img_wrapper">
          <img src={heroImage} alt="" className="hero_img" />
          {isHero && <img src={ArrowDown} alt="" className="arr_dwn" />}
        </div>
      </div>
    </section>
  )
}

export default Hero
