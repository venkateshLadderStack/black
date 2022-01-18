import * as React from "react"
import "../styles/globalStyles.css"
import home from "../../site/home/home.json"
import Hero from "../components/Home/Hero"
import Section1 from "../components/Home/Section1"
import Section2 from "../components/Home/Section2"
import Section3 from "../components/Home/Section3"
import Section4 from "../components/Home/Section4"
import Section5 from "../components/Home/Section5"

const IndexPage = () => {
  return (
    <div className="wrapper">
      <Hero heroImage={home?.heroImage} />
      <Section1 data={home?.sectionOne} />
      <Section2 data={home?.sectionTwo} />
      <Section3 data={home?.sectionThree} />
      <Section4 data={home?.sectionFour} />
      <Section5 data={home?.sectionFive} />
      <Hero heroImage={home?.footerHeroImage} isHero={false} />
    </div>
  )
}

export default IndexPage
