import React from "react"

const Section5 = ({ data }) => {
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
        <div className="col-12 text-center d-flex justify-content-center">
          <div className="text_wrapper_sc5">
            <h2>{data?.title}</h2>
            <p>{data?.description}</p>
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section5
