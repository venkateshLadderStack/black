import React from "react"
import useWindowSize from "../../hooks/useWindowSize"
import post1 from "../images/insta/post1.png"
import post2 from "../images/insta/post2.png"
import post3 from "../images/insta/post3.png"
import * as insta from "../styles/insta.module.css"

const feedOne = [
  {
    img: post1,
  },
  {
    img: post2,
  },

  {
    img: post1,
  },
  {
    img: post2,
  },
]

const feedTwo = [
  {
    img: post3,
  },
  {
    img: post3,
  },
  {
    img: post3,
  },
  {
    img: post3,
  },
  {
    img: post3,
  },
  {
    img: post3,
  },
]

function InstaFeed() {
  const { width } = useWindowSize()
  return (
    <>
      <div className={width < 1000 ? "container-fluid" : "container"}>
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-8 col-12">
            <div className="row">
              {feedOne.map((item, i) => (
                <>
                  <div key={i} className="col-6 d-flex justify-content-center">
                    <img
                      src={item.img}
                      width={width < 400 ? 150 : 200}
                      height={width < 400 ? 150 : 200}
                      alt=""
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className={`col-lg-7 col-md-6 col-sm-4 ${insta.feedTwo}`}>
            <div className="row">
              {feedTwo.map((item, i) => (
                <>
                  <div
                    key={i}
                    className="col-lg-4 col-md-6  d-flex justify-content-center"
                  >
                    <img src={item.img} width={200} height={200} alt="" />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="row d-flex justify-content-center">
          {feedOne.map((item, i) => (
            <>
              <div key={i} className="col-2 me-1">
                <img src={item.img} width={200} height={200} alt="" />
              </div>
            </>
          ))}
        </div> */}
      </div>
    </>
  )
}

export default InstaFeed
