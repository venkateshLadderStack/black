import React from "react"
import * as btn from "../styles/button.module.css"

const Button = ({ classN, name }) => {
  return (
    <>
      <div>
        <button className={classN ? btn.green : btn.orange}>{name}</button>
      </div>
    </>
  )
}

export default Button
