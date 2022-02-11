import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useWindowSize from "../../hooks/useWindowSize"
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
  const { width } = useWindowSize()
  const data = useStaticQuery(graphql`
    query one {
      allFile(filter: { relativeDirectory: { eq: "set1" }, relativePath: {} }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
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
      <div className="row d-flex justify-content-between align-items-center">
        {data.allFile.edges.map(({ node }, i) => (
          <div className="col-lg-2 col-md-12 col-sm-12 col-12 my-2">
            <div data-aos="zoom-in-up" data-aos-duration={`${750 * i}`}>
              <Img
                style={
                  width < 600
                    ? width < 500
                      ? { maxWidth: "130px" }
                      : { maxWidth: "161px" }
                    : { maxWidth: "250px" }
                }
                fluid={node.childImageSharp.fluid}
                alt={node.base}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Frame6
