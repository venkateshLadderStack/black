import React from "react"
import * as home from "../styles/home.module.css"
import Button from "./Button"
import useWindowSize from "../../hooks/useWindowSize"
import homeImg from "../images/hom1.png"
import homeImg2 from "../images/home_img2.png"

const content = [
  {
    title: "LOREM ISPUM",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.`,
    img: homeImg,
  },
  {
    title: "LOREM ISPUM",
    desc: ` Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.`,
    img: homeImg2,
  },
]

const Section = () => {
  const { width } = useWindowSize()
  return (
    <>
      <div className="container">
        {content.map((item, i) => (
          <>
            <div
              key={i}
              className={home.section}
              style={
                i % 2 == 0
                  ? { flexDirection: "row-reverse" }
                  : { flexDirection: "row" }
              }
            >
              <div
                className={home.image}
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="750"
              >
                <img
                  src={item.img}
                  className="cover br_25"
                  width={
                    width < 350
                      ? 300
                      : width < 450
                      ? 420
                      : width < 881
                      ? 400
                      : 540.45
                  }
                  height={
                    width < 400
                      ? 177.62
                      : width < 450
                      ? 247.8
                      : width < 881
                      ? 236
                      : 320
                  }
                  alt="home"
                />
              </div>
              <div
                className={home.content}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="750"
              >
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <Button classN="green" name="Where to Find Us" />
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default Section
