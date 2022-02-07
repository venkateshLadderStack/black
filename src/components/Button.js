import React from "react"
import * as btn from "../styles/button.module.css"

const Button = ({ classN, name }) => {
  return (
    <>
      <button className={classN ? btn.green : btn.orange}>{name}</button>
    </>
  )
}

export default Button
