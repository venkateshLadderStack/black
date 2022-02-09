import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as frame from "../styles/frame7.module.css"
import Button from "./Button"
import useWindowSize from "../../hooks/useWindowSize"
import recepie1 from "../images/recipies/recipie1.png"
import recepie2 from "../images/recipies/recipie2.png"
import recepie3 from "../images/recipies/recipie3.png"

const content = [
  {
    title: "LOREM ISPUM",
    img: recepie1,
  },
  {
    title: "LOREM ISPUM",
    img: recepie2,
  },
  {
    title: "LOREM ISPUM",
    img: recepie3,
  },
]

function Frame7() {
  const { width } = useWindowSize()
  return (
    <>
      <div className={frame.content}>
        <h1>Recipes</h1>
        <p>OUR FAVORITE WAYS TO ENJOY BLACK IRISH</p>
        <div className={frame.imgSection}>
          {content.map((item, i) => (
            <div key={i} className="mx-4">
              <img
                src={item.img}
                alt="recipies"
                placeholder="blurred"
                layout="fixed"
                width={270}
                height={250}
              />
              <p>LOREM ISPUM</p>
            </div>
          ))}
        </div>
        <Button classN="green" name="View all recipies" />
      </div>
    </>
  )
}

export default Frame7
