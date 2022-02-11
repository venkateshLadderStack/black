import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import * as globalStyle from "../styles/global.module.css"

function products() {
  return (
    <>
      <Seo title="Products" description="Black Irish" />

      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default products
