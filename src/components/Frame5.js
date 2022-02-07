import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Button from "./Button"
import * as home from "../styles/home.module.css"

const Frame5 = () => {
  const data = useStaticQuery(graphql`
    query Frame5 {
      file(relativePath: { eq: "bottle.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div className="container">
      <div className={home.frame5}>
        <div className={home.frame}>
          <Img
            height={168}
            fixed={data.file.childImageSharp.fixed}
            alt="bottle"
          />
          <h3>LOREM ISPUM</h3>
          <Button classN="green" name="Learn more" />
        </div>
        <div className={home.frame}>
          <Img
            height={168}
            fixed={data.file.childImageSharp.fixed}
            alt="bottle"
          />
          <h3>LOREM ISPUM</h3>
          <Button classN="green" name="Learn more" />
        </div>
        <div className={home.frame}>
          <Img
            height={168}
            fixed={data.file.childImageSharp.fixed}
            alt="bottle"
          />
          <h3>LOREM ISPUM</h3>
          <Button classN="green" name="Learn more" />
        </div>
      </div>
    </div>
  )
}

export default Frame5
