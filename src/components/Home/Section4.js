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
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="col-sm-12 col-md-7 text-center"></div>
        <div className="col-sm-12 col-md-5">
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
