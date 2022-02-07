import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

function Frame6() {
  const data = useStaticQuery(graphql`
    query one {
      allFile(filter: { relativeDirectory: { eq: "set1" }, relativePath: {} }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {data.allFile.edges.map(({ node }) => (
        <div className="col-lg-2 col-md-12 col-sm-12 my-2">
          <>
            <Img
              style={{ maxWidth: "161px" }}
              fluid={node.childImageSharp.fluid}
              alt={node.base}
            />
          </>
        </div>
      ))}
    </>
  )
}

export default Frame6
