import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as frame from "../styles/frame7.module.css"
import Button from "./Button"
import useWindowSize from "../../hooks/useWindowSize"
function Frame7() {
  const { width } = useWindowSize()
  return (
    <>
      <div className={frame.content}>
        <h1>Recipes</h1>
        <p>OUR FAVORITE WAYS TO ENJOY BLACK IRISH</p>
        <div className={frame.imgSection}>
          <div className="mx-4">
            <StaticImage
              src="../images/recipies.png"
              alt="recipies"
              placeholder="blurred"
              layout="fixed"
              width={270}
              height={270}
            />
            <p>LOREM ISPUM</p>
          </div>
          <div className="mx-4">
            <StaticImage
              src="../images/recipies.png"
              alt="recipies"
              placeholder="blurred"
              layout="fixed"
              width={270}
              height={270}
            />
            <p>LOREM ISPUM</p>
          </div>
          <div className="mx-4">
            <StaticImage
              src="../images/recipies.png"
              alt="recipies"
              placeholder="blurred"
              layout="fixed"
              width={270}
              height={270}
            />
            <p>LOREM ISPUM</p>
          </div>
        </div>
        <Button classN="green" name="View all recipies" />
      </div>
    </>
  )
}

export default Frame7
