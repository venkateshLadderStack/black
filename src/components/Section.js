import React from "react"
import * as home from "../styles/home.module.css"
import Button from "./Button"
import { Image } from "./ImageComponent"
const content = [
  {
    title: "LOREM ISPUM",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.`,
  },
  {
    title: "LOREM ISPUM",
    desc: ` Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.`,
  },
]
const Section = () => {
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
              <div className={home.image}>
                <Image />
              </div>
              <div className={home.content}>
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
