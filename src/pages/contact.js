import React, { useState, useEffect } from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import Signature from "../components/Signature"
import * as globalStyle from "../styles/global.module.css"

function Contact() {
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
      <Seo title="Contact" description="Black Irish" />
      <Layout>
        <div className={globalStyle.page}>
          <div className={globalStyle.pageTitle}>
            <h1>Contact</h1>
          </div>
          <div className={globalStyle.border}></div>
          <div className="bg-dark">
            {startAnim && <Signature startAnim={startAnim} />}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Contact
