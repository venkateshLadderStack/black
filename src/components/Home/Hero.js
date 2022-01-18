import React from "react"
import ArrowDown from "../../images/Vector.svg"

const Hero = ({ heroImage, isHero = true }) => {
  return (
    <section style={{ overflow: "hidden" }}>
      <div className="row">
        <div
          style={{
            backgroundImage: `url(${heroImage})`,
            width: "100%",
            height: "100%",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="col-12 hero_img_wrapper">
          {isHero && <img src={ArrowDown} alt="" className="arr_dwn" />}
        </div>
      </div>
    </section>
  )
}

export default Hero
