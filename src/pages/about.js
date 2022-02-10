import React from "react"
import Layout from "../components/Layout/Layout"
import about1 from "../images/recipies/recipie1.png"
import about2 from "../images/recipies/recipie2.png"
import About from "../components/About/About.js"
import * as globalStyle from "../styles/global.module.css"
import InstaFeed from "../components/InstaFeed"
import Seo from "../components/seo"

const aboutData = [
  {
    title: "Lorem Ipsum is simply dummy text ",
    subTitle: "dummy text",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    img: about1,
  },
  {
    title: "Lorem Ipsum is simply dummy text ",
    subTitle: "dummy text",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    img: about2,
  },
]

function about() {
  return (
    <>
      <Seo title="About" description="Black Irish" />
      <Layout>
        <>
          <div className={globalStyle.page}>
            <div className={globalStyle.pageTitle}>
              <h1>About</h1>
            </div>
            <div className={globalStyle.border}></div>
          </div>
          <div className="container my-5">
            <About data={aboutData} />
          </div>
          <div className="my-5">
            <InstaFeed />
          </div>
        </>
      </Layout>
    </>
  )
}

export default about
