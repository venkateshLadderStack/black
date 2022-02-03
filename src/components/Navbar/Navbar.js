import React from "react"
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../../images/logo.png"

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
  return (
    <>
      <div className="container-fluid">
        <div className="navbar">
          <img className="mx-5" src={logo} alt="" width={76.7} height={65} />
          <ul className="nav_group">
            {navLinks.map((item, i) => {
              return (
                <>
                  <li className="mx-3 mt-3 nav_item" key={i}>
                    <a href={item.link}>{item.name} </a>
                  </li>
                </>
              )
            })}
          </ul>
          <div className="mx-5 ">
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
