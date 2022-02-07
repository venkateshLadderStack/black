import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

function Frame61() {
  const data = useStaticQuery(graphql`
    query two {
      allFile(filter: { relativeDirectory: { eq: "set2" }, relativePath: {} }) {
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
        <div className="col-lg-2 col-md-12 col-sm-12 my-2 ms-5">
          <>
            <Img
              style={{ maxWidth: "200px" }}
              fluid={node.childImageSharp.fluid}
              alt={node.base}
            />
          </>
        </div>
      ))}
    </>
  )
}

export default Frame61
