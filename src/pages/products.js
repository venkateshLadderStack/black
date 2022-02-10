import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import * as globalStyle from "../styles/global.module.css"

function products() {
  return (
    <>
      <Seo title="Products" description="Black Irish" />

      <Layout>
        <div className={globalStyle.page}>
          <div className={globalStyle.pageTitle}>
            <h1>Products</h1>
          </div>
          <div className={globalStyle.border}></div>
        </div>
      </Layout>
    </>
  )
}

export default products
