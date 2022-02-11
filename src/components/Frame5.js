import React from "react"
import Button from "./Button"
import * as home from "../styles/home.module.css"
import bottle1 from "../images/bottle.png"
import bottle2 from "../images/bottle2.png"
import bottle3 from "../images/bottle3.png"

const content = [
  {
    title: "LOREM ISPUM",
    img: bottle1,
  },
  {
    title: "LOREM ISPUM",
    img: bottle2,
  },
  {
    title: "LOREM ISPUM",
    img: bottle3,
  },
]

const Frame5 = () => {
  return (
    <div className="container">
      <div className={home.frame5}>
        {content.map((item, i) => (
          <div
            key={i}
            className={home.frame}
            data-aos="zoom-in"
            data-aos-duration={`${1250 * i}`}
          >
            <img src={item.img} height={273.1} alt="" />
            <h3>{item.title}</h3>
            <Button classN="green" name="Learn more" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Frame5
