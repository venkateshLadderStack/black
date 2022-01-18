import React, { useEffect, useState } from "react"

const Layout = ({ children, splash }) => {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 2000)
  }, [])

  return (
    <>
      {load ? (
        children
      ) : (
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={splash}
            alt=""
          />
        </div>
      )}
    </>
  )
}

export default Layout
