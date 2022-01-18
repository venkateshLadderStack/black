import React from "react"

const Section2 = ({ data }) => {
  return (
    <section>
      <div
        className="row"
        style={{
          backgroundImage: `url(${data?.bg})`,
        }}
      >
        <div className="col-6">
          <div className="text_wrapper_sc2">
            <h2>{data?.title}</h2>
            <p>{data?.description}</p>
          </div>
        </div>
        <div className="col-6 text-center"></div>
      </div>
    </section>
  )
}

export default Section2
