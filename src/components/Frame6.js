import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const imgs = [
  {
    src: "../images/company.png",
    name: "company",
  },
  {
    src: "../images/company1.png",
    name: "company1",
  },
  {
    src: "../images/company2.png",
    name: "company2",
  },
  {
    src: "../images/company3.png",
    name: "company3",
  },
  {
    src: "../images/company4.png",
    name: "company4",
  },
]
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
