import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as footer from "../../styles/footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import footerImg from "../../images/footer_img.png"

function Footer() {
  return (
    <>
      <div className={footer.footer}>
        <div className={footer.logo__section}>
          <div className={footer.logo_content}>
            <StaticImage
              src="../../images/logo.png"
              alt="logo"
              placeholder="blurred"
              layout="fixed"
              width={154}
              height={130}
            />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className={footer.iconSection}>
              <FontAwesomeIcon
                className={footer.icon}
                icon={faFacebookF}
                size="2x"
              />
              <FontAwesomeIcon
                className={footer.icon}
                icon={faInstagram}
                size="2x"
              />
              <FontAwesomeIcon
                className={footer.icon}
                icon={faTwitter}
                size="2x"
              />
            </div>
          </div>
        </div>
        <div
          className="p-3"
          style={{
            position: "relative",
            backgroundImage: `url(${footerImg})`,
            width: "100%",
            height: "auto",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className={footer.content}>
            <div className={footer.details_group}>
              <div className={footer.group_link}>
                <h3>Company</h3>
                <ul>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                </ul>
              </div>
              <div className={footer.group_link}>
                <h3>Company</h3>
                <ul>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                </ul>
              </div>
            </div>
            <div className={footer.subscribeArea}>
              <div>
                <h3>Company</h3>
                <p>
                  Subscribe to stay up to date with Go Black Irish news and
                  product launches.
                </p>
              </div>
              <div>
                <input
                  className={footer.inputArea}
                  placeholder="Enter Your Email Address"
                />
                <button className={footer.btn} type="submit">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
