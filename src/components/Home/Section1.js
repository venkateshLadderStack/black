import React from "react"

const Section1 = ({ data }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${data?.bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row">
        <div className="col-sm-12 col-md-7">
          <div className="text_wrapper">
            <h2>{data?.title}</h2>
            <p>{data?.description}</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-5 d-flex justify-content-center align-items-center">
          <img src={data?.bg2} className="sc1_bg2" />
        </div>
      </div>
    </section>
  )
}

export default Section1
