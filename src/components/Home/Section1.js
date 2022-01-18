import React from "react"

const Section1 = ({ data }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${data?.bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="row">
        <div className="col-7">
          <div className="text_wrapper">
            <h2>{data?.title}</h2>
            <p>{data?.description}</p>
          </div>
        </div>
        <div className="col-5 text-center">
          <img src={data?.bg2} className="sc1_bg2" />
        </div>
      </div>
    </section>
  )
}

export default Section1
