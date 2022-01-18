import React from "react"

const Section3 = ({ data }) => {
  return (
    <section>
      <div
        className="row"
        style={{
          backgroundImage: `url(${data?.bg})`,
        }}
      >
        <div className="col-7 text-center"></div>
        <div className="col-5">
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
