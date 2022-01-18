import * as React from "react"

import "../styles/globalStyles.css"
import home from "../../site/home/landing.json"

const IndexPage = () => {
  return (
    <div className="wrapper">
      <div
        style={{
          backgroundImage: `url(${home?.splashBg1})`,
          width: "100vw",
          height: "100vh",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
      <div
        style={{
          backgroundImage: `url(${home?.splashBg2})`,
          width: "100vw",
          height: "100vh",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
    </div>
  )
}

export default IndexPage
