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

  const [startAnim, setStartAnim] = useState(false)
  const loadAnim = () =>
    setTimeout(() => {
      setStartAnim(true)
    }, 2500)

  useEffect(() => {
    loadAnim()
  }, [])

  return (
    <Layout>
      <div
        style={{
          backgroundImage: `url(${
            (width > 768 && LargeBg) || (width < 768 && SmallBg)
          })`,
          width: "100vw",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="subscribe-area">
          {startAnim && <Signature startAnim={startAnim} />}
          <p>Sign Up Now For More Information</p>
          <form action="" className="subscribe">
            <input type="email" placeholder="Email Address" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
