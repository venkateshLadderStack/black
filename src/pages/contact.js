import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import * as globalStyle from "../styles/global.module.css"
import sign_img from "../images/sign_dark.png"
import bottle_img from "../images/bottle2.png"
import * as contactStyle from "../styles/contact.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as poster from "../styles/poster.module.css"
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import InstaFeed from "../components/InstaFeed"
import useWindowSize from "../../hooks/useWindowSize"

function Contact() {
  const { width } = useWindowSize()

  return (
    <>
      <Seo title="Contact" description="Black Irish" />
      <Layout>
        <div className={globalStyle.page}>
          <div className={globalStyle.pageTitle}>
            <h1>Contact</h1>
          </div>
          <div className={globalStyle.border}></div>
        </div>
        <div className="container my-5">
          <div className="row d-flex flex-row-reverse">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
              <img
                width={width < 500 ? 249.2 : width < 700 ? 358 : 494.51}
                height={width < 500 ? 280 : width < 700 ? 390 : 550}
                src={bottle_img}
                alt="bottle_img"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 px-1 ">
              <div className="d-flex justify-content-center">
                <img
                  height={width < 500 ? 131.6 : 158.83}
                  width={width < 500 ? 280 : 334.19}
                  src={sign_img}
                  alt="sign_img"
                />
              </div>
              <div className="row my-1 mx-1 ">
                <div
                  className={`col-lg-6 col-md-12 col-sm-12 col-12 ${contactStyle.input_area}`}
                >
                  <label htmlFor="name">Name</label>
                  <input type="text" />
                </div>
                <div
                  className={`col-lg-6 col-md-12 col-sm-12 col-12 ${contactStyle.input_area}`}
                >
                  <label htmlFor="name">Email</label>
                  <input type="text" />
                </div>
                <div className={`my-4  ${contactStyle.input_area}`}>
                  <label htmlFor="name">Message</label>
                  <textarea type="text" />
                </div>
                <div className="row d-flex flex-row justify-content-between my-3 ">
                  <div className="mb-3 col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                    <a
                      target="_blank"
                      className="text-dark social_icon mx-2"
                      href="https://www.facebook.com/goblackirish/"
                    >
                      <FontAwesomeIcon icon={faFacebookF} size="2x" />
                    </a>
                    <a
                      target="_blank"
                      className="text-dark social_icon mx-2"
                      href="https://www.instagram.com/goblackirish/"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a
                      target="_blank"
                      className="text-dark social_icon mx-2"
                      href="https://twitter.com/goblackirish?lang=en"
                    >
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a
                      target="_blank"
                      className="text-dark social_icon mx-2"
                      href="https://www.tiktok.com/@goblackirish"
                    >
                      <FontAwesomeIcon icon={faTiktok} size="2x" />
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12  d-flex justify-content-center">
                    <button className={` ${poster.green}`}>Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <InstaFeed />
        </div>
      </Layout>
    </>
  )
}

export default Contact
