import React from 'react'
import NotFoundStyles from "./NotFound.module.css"
import err from "../../assets/images/error.svg"
const NotFound = () => {
  return (
    <>
    <div className="container text-center w-50">
      <img src={err} className='w-100' alt="" />
    </div>
    </>
  )
}

export default NotFound
