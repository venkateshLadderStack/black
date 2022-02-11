import React from "react"
import useWindowSize from "../../../hooks/useWindowSize"
import * as globalStyle from "../../styles/global.module.css"

function About({ data }) {
  const { width } = useWindowSize()
  return (
    <>
      {data.map((item, i) => (
        <>
          <div
            className={
              i % 2 == 0
                ? "row d-flex justify-content-center align-items-center"
                : "row d-flex flex-row-reverse justify-content-center align-items-center"
            }
          >
            <div
              data-aos="fade-up"
              data-aos-duration="850"
              className={`${globalStyle.individual} col-lg-6 col-md-12 col-sm-12 col-12`}
            >
              <h4>{item.title}</h4>
              <h6>{item.subTitle}</h6>
              <p>{item.desc}</p>
            </div>

            <div
              className="col-lg-6 col-md-12 col-sm-12 col-12"
              data-aos="zoom-in"
              data-aos-duration="750"
            >
              <img
                src={item.img}
                width={
                  width < 400
                    ? 300
                    : width < 500
                    ? 350
                    : width < 1800
                    ? 450
                    : 550
                }
                height={
                  width < 400
                    ? 174
                    : width < 500
                    ? 203
                    : width < 1800
                    ? 280
                    : 320
                }
                alt={item.title}
              />
            </div>
          </div>
        </>
      ))}
    </>
  )
}

export default About
