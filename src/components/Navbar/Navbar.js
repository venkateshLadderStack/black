import React, { useState } from "react"
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import {
  faBars,
  faTimes,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../../images/logo.png"
import useWindowSize from "../../../hooks/useWindowSize"

const navLinks = [
  {
    link: "/home",
    name: "Home",
  },
  {
    link: "/about",
    name: "About",
  },
  {
    link: "/contact",
    name: "Contact",
  },
  {
    link: "/products",
    name: "Products",
  },
  {
    link: "/recipies",
    name: "Recipies",
  },
  {
    link: "/press",
    name: "Press",
  },
]

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const { width } = useWindowSize()
  return (
    <>
      {width}
      {width > 851 ? (
        <div className="container-fluid">
          <div className="navbar">
            <img className="mx-5" src={logo} alt="" width={76.7} height={65} />
            <ul className="nav_group">
              {navLinks.map((item, i) => {
                return (
                  <>
                    <li className="nav_item" key={i}>
                      <a href={item.link}>{item.name} </a>
                    </li>
                  </>
                )
              })}
            </ul>
            <ul className="nav_group">
              <li className="nav_item ">
                <a
                  target="_blank"
                  className="text-black social_icon mx-2"
                  href="https://www.instagram.com/goblackirish/"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a
                  target="_blank"
                  className="text-black social_icon mx-2"
                  href="https://twitter.com/goblackirish?lang=en"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <>
          <div className="mobile_nav ">
            {toggle ? (
              <>
                <div className={toggle ? "slide_nav active" : "slide_nav"}>
                  <FontAwesomeIcon
                    className="mx-3"
                    onClick={() => {
                      setToggle(false)
                    }}
                    icon={faTimes}
                    size="2x"
                  />
                </div>
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  className="mx-3"
                  onClick={() => {
                    setToggle(true)
                  }}
                  icon={faBars}
                  size="2x"
                />
              </>
            )}
            <div className="mobile_logo">
              <img
                className="mx-5"
                src={logo}
                alt=""
                width={76.7}
                height={65}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Navbar
