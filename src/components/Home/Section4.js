import React from "react"

const Section4 = ({ data }) => {
  return (
    <section>
      <div
        className="row"
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${data?.bg})`,
            width: "100%",
            height: "100%",
            opacity: 0.5,
          }}
        />
        <div className="col-7 text-center"></div>
        <div className="col-5">
          <div className="text_wrapper_sc4">
            <h2>{data?.title}</h2>
            <p>{data?.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section4
