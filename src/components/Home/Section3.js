import React from "react"

const Section3 = ({ data }) => {
  return (
    <section
      style={{
        position: "relative",
      }}
    >
      <div
        className="row"
        style={{
          backgroundImage: `url(${data?.bg})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="d-none d-md-block col-sm-12 col-md-7 text-center"></div>
        <div className="col-sm-12 col-md-5">
          <div className="text_wrapper_sc3">
            <h2>{data?.title}</h2>
            <p>{data?.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3
