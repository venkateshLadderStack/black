import React, { useEffect, useRef, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

import useWindowSize from "../../hooks/useWindowSize"
import Layout from "../components/layout"
import LargeBg from "../images/irish.svg"
import SmallBg from "../images/black_irish.svg"
import Signature from "../components/Signature"

const IndexPage = () => {
  const { width } = useWindowSize()

  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bg.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1280
              placeholder: NONE
              formats: [WEBP]
              quality: 70
              webpOptions: { quality: 70 }
            )
          }
        }
        mobileImage: file(relativePath: { eq: "mb-bg.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 480
              placeholder: NONE
              formats: [WEBP]
              quality: 80
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  )

  const image = getImage(data?.placeholderImage)
  const mbImage = getImage(data?.mobileImage)

  const [startAnim, setStartAnim] = useState(false)
  const [bg, setBg] = useState(image)

  const loadAnim = () =>
    setTimeout(() => {
      setStartAnim(true)
    }, 1250)

  useEffect(() => {
    if (width <= 767) {
      setBg(mbImage)
    } else {
      setBg(image)
    }
  }, [width])

  const bgImage = convertToBgImage(bg)

  return (
    <Layout loadAnim={loadAnim}>
      {/* <BackgroundImage Tag="div" {...bgImage} preserveStackingContext> */}
      <div
        className="irish"
        style={{
          backgroundImage: `url(${
            (width > 768 && LargeBg) || (width < 768 && SmallBg)
          })`,

          width: "100vw",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="subscribe-area">
          {startAnim && <Signature startAnim={startAnim} />}
          <p>Sign Up Now For More Information</p>
          <form action="" className="subscribe">
            <input type="email" placeholder="abc@xyz.com" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      {/* </BackgroundImage> */}
    </Layout>
  )
}

export default IndexPage
