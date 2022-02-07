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
import Navbar from "../components/Navbar/Navbar"
import Banner from "../components/Banner"
import Section from "../components/Section"
import Frame5 from "../components/Frame5"
import Poster from "../components/Poster"
import Frame6 from "../components/Frame6"
import Frame7 from "../components/Frame7"
import Footer from "../components/Navbar/Footer"
import Frame61 from "../components/Frame61"

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
        {/* <div
          className="container-fluid"
          style={{
            backgroundImage: `url(${
              (width > 768 && LargeBg) || (width < 768 && SmallBg)
            })`,
            width: "auto",
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
                className="text-white social_icon mx-2"
                href="https://www.facebook.com/goblackirish/"
              >
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a
                target="_blank"
                className="text-white social_icon mx-2"
                href="https://www.instagram.com/goblackirish/"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                target="_blank"
                className="text-white social_icon mx-2"
                href="https://twitter.com/goblackirish?lang=en"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                target="_blank"
                className="text-white social_icon mx-2"
                href="https://www.tiktok.com/@goblackirish"
              >
                <FontAwesomeIcon icon={faTiktok} size="2x" />
              </a>
            </div>
          </div>
        </div> */}
        <Navbar />
        <Banner />
        <div className="my-5">
          <Section />
        </div>
        <div className="my-5">
          <Frame5 />
        </div>
        <div className="my-5">
          <Poster />
        </div>
        <div className="my-5">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-lg-12 col-md-6 col-sm-6">
                <div className="row d-flex justify-content-center align-items-center">
                  <Frame6 />
                </div>
              </div>
              <div className="col-lg-12 col-md-6 col-sm-6">
                <div className="row d-flex justify-content-center align-items-center">
                  <Frame61 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <Frame7 />
        </div>
        <Footer />
      </Layout>
    </>
  )
}

export default IndexPage
