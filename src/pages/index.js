import React, { useEffect, useRef, useState } from "react"

import useWindowSize from "../../hooks/useWindowSize"
import Layout from "../components/layout"
import LargeBg from "../images/irish.svg"
import SmallBg from "../images/black_irish.svg"
import Signature from "../components/Signature"
import MailchimpForm from "../components/SubscribeForm"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faTwitter,
  faFacebookF,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons"
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
            <div className="d-flex flex-row mt-3 ">
              <a
                target="_blank"
                className="text-white mx-2"
                href="https://www.facebook.com/goblackirish/"
              >
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a
                target="_blank"
                className="text-white mx-2"
                href="https://www.instagram.com/goblackirish/"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                target="_blank"
                className="text-white mx-2"
                href="https://twitter.com/goblackirish?lang=en"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                target="_blank"
                className="text-white mx-2"
                href="https://www.tiktok.com/@goblackirish"
              >
                <FontAwesomeIcon icon={faTiktok} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
