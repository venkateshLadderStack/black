import React from "react"
import ArrowDown from "../../images/Vector.svg"
import { useScrollBy } from "react-use-window-scroll"

const Hero = ({ heroImage, isHero = true }) => {
  const scrollBy = useScrollBy()
  return (
    <section style={{ overflow: "hidden" }}>
      <div className="row">
        <div
          style={{
            backgroundImage: `url(${heroImage})`,
            width: "100%",
            height: isHero ? "80%" : "100%",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="col-12 hero_img_wrapper">
          {isHero && (
            <img
              src={ArrowDown}
              onClick={() =>
                scrollBy({ top: 710, left: 0, behavior: "smooth" })
              }
              alt=""
              className="arr_dwn"
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
