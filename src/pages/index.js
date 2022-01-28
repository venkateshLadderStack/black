import React, { useEffect, useRef, useState } from "react"

import useWindowSize from "../../hooks/useWindowSize"
import Layout from "../components/layout"
import LargeBg from "../images/irish.svg"
import SmallBg from "../images/black_irish.svg"
import Signature from "../components/Signature"
import MailchimpForm from "../components/SubscribeForm"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

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
    <>
      <Seo title="Black Irish" description="Black Irish" />
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
            <MailchimpForm />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
