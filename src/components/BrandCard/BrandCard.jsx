import React, { useState, useEffect } from 'react'
import brandImage1 from '../../assets/images/aston-martin.png'
import brandImage2 from '../../assets/images/bmw.png'
import brandImage3 from '../../assets/images/suzuki.png'
import brandImage4 from '../../assets/images/porsche.png'
import brandImage5 from '../../assets/images/kia.png'

import brandImage6 from '../../assets/images/mercedes-benz.png'
import BrandCardStyles from "./BrandCard.module.css"
import { listBrands } from '../../api'
const BrandCard = () => {

  const [brands, setBrands] = useState([])
  useEffect(() => {
    const setData = async () => {
      const brands = await listBrands()
      setBrands(brands)
    }
    setData().catch((err) => console.log(err))
  }, [])
  return (
    <>
      <div className="container">
        <div className="row g-4  ">
      
            <div className="col-md-4 col-lg-2">
            <div className={`${BrandCardStyles.brandCard} p-sm-5 p-lg-4  text-center rounded-4 d-flex align-items-center justify-content-center`} >
              <div className='mx-auto'>
                 <img src={brandImage1} alt="" className="img-fluid mb-3"/>
                  <h3 className={`${BrandCardStyles.brandName} m-0`}>aston martin</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className={`${BrandCardStyles.brandCard} p-sm-5 p-lg-4  text-center rounded-4 d-flex align-items-center justify-content-center`} >
              <div className='mx-auto'>
                 <img src={brandImage6} alt="" className="img-fluid mb-3"/>
                  <h3 className={`${BrandCardStyles.brandName} m-0`}>mercedes</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className={`${BrandCardStyles.brandCard} p-sm-5 p-lg-4  text-center rounded-4 d-flex align-items-center justify-content-center`} >
              <div className='mx-auto'>
                 <img src={brandImage3} alt="" className="img-fluid mb-3"/>
                  <h3 className={`${BrandCardStyles.brandName} m-0`}>suzuki</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className={`${BrandCardStyles.brandCard} p-sm-5 p-lg-4  text-center rounded-4 d-flex align-items-center justify-content-center`} >
              <div className='mx-auto'>
                 <img src={brandImage4} alt="" className="img-fluid mb-3"/>
                  <h3 className={`${BrandCardStyles.brandName} m-0`}>porsche</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className={`${BrandCardStyles.brandCard} p-sm-5 p-lg-4  text-center rounded-4 d-flex align-items-center justify-content-center`} >
              <div className='mx-auto'>
                 <img src={brandImage2} alt="" className="img-fluid mb-3"/>
                  <h3 className={`${BrandCardStyles.brandName} m-0`}>bmw</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className={`${BrandCardStyles.brandCard} p-sm-5 p-lg-4  text-center rounded-4 d-flex align-items-center justify-content-center`} >
              <div className='mx-auto'>
                 <img src={brandImage5} alt="" className="img-fluid mb-3"/>
                  <h3 className={`${BrandCardStyles.brandName} m-0`}>kia</h3>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default BrandCard
