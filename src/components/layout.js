import React, { useCallback, useEffect, useState } from "react"
import "../styles/globalStyles.css"
import "../styles/style.css"
import "../styles/responsive.css"
import AgeConfirmPopup from "./AgeConfirmPopup"

const Layout = ({ children, loadAnim }) => {
  const [age, setAge] = useState(false)

  const handleSubmitAge = e => {
    e.preventDefault()
    setAge(true)
    loadAnim()
  }

  return (
    <>
      {age ? children : <AgeConfirmPopup handleSubmitAge={handleSubmitAge} />}
    </>
  )
}

export default Layout
