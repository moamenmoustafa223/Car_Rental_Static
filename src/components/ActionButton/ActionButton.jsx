import React from 'react'
import ActionButtonStyles from "./ActionButton.module.css"
import { Link } from 'react-router-dom'
const ActionButton = ({className}) => {
  return (
    <>
     <Link to={`/cars`} className={`${className} ${ActionButtonStyles.wrap} btnCustom m-0 rounded-4 `} >Show More <i className="bi bi-arrow-up-right fw-bolder fs-6 fw-bold "></i></Link> 
    </>
  )
}

export default ActionButton
