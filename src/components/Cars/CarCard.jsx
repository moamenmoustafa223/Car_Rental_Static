import React from "react";
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import optionImg1 from '../../assets/images/car-door.png'
import optionImg2 from '../../assets/images/bag.png'
import optionImg3 from '../../assets/images/calendar.png'
import optionImg4 from '../../assets/images/suv.png'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import cardImage from '../../assets/images/Ferrari_296-GTB_2023_23888_23888_17178874182-1_small.jpg'
import logoImage from '../../assets/images/ferrari (1).png'
import CarsStyles from './Cars.module.css'

/**
 * 
 * @param {Object} props
 * @param {object} props.car
 */
export default function CarCard({ car }) {
 
    return (
        <>
         <div className="container pt-5 px-lg-4 ">

<div className={`${CarsStyles.cardCustom} card mb-3  ms-auto p-0 position-relative`} >
  <div className={`${CarsStyles.cardHeader} position-absolute p-3 d-flex justify-content-between align-items-center`}>
    <Badge className='py-2 px-3 rounded-4 mainBG text-uppercase'>suv</Badge>
    <div className={`${CarsStyles.fav}  p-2 rounded-circle  mainColor d-flex justify-content-center align-items-center`}>
      <i className="fa-regular fa-bookmark"></i>
      <i className="fa-solid fa-bookmark"></i>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4 ">
      <div className={`${CarsStyles.imgContainer} h-100 position-relative `}>
        <img src={cardImage} className="img-fluid w-100 h-100 rounded-start" alt="..." />
        <div className={`${CarsStyles.imgLayer} rounded-start-1 position-absolute d-flex justify-content-center align-items-center`}>
          <Link className={`${CarsStyles.btnCustom}`}  to={`/carddetils`}>
            Show More <i className="bi bi-arrow-up-right ms-2 fs-6 fw-bold"></i>
            </Link>
        </div>
      </div>
    </div>
    <div className="col-md-8 text-start">
      <div className="card-body p-md-3 px-lg-4">
        <div className="cardContent">
          <h5 className="card-title ">
            <div className="cardHeader d-flex align-items-center text-start mb-3">
              <img src={logoImage} className='me-3 img-fluid' alt="" />
              <div>
                <h5 className={`${CarsStyles.cardTitle} m-0 mb-1`}>KIA <span>2008</span> <span>2023</span></h5>
                <p className={`${CarsStyles.vendorName} m-0`}>EuroLine</p>
              </div>
            </div>
          </h5>
          <div className={`${CarsStyles.divider} p-0 text-center mb-3 px-3`}>

          {/* to do */}
          
          <div className="d-flex justify-content-center py-3">

<OverlayTrigger key="top" placement="top" overlay={<Tooltip id={`tooltip-top`}>num of doors</Tooltip>}>

  <div className={`${CarsStyles.options} d-flex align-items-center mx-1`}>
     <img src={optionImg1} className='me-1 opacity-50' alt="" /> <span>4</span>
  </div>

</OverlayTrigger>
<OverlayTrigger key="top" placement="top" overlay={<Tooltip id={`tooltip-top`}>num of luggage bag</Tooltip>}>

     <div className={`${CarsStyles.options} d-flex align-items-center mx-1`}>
     <img src={optionImg2} className='me-1' alt="" /> <span>4</span>
     </div>
     </OverlayTrigger>
     <OverlayTrigger key="top" placement="top" overlay={<Tooltip id={`tooltip-top`}>minimum days of rent</Tooltip>}>

     <div className={`${CarsStyles.options} d-flex align-items-center mx-1`}>
     <img src={optionImg3} className='me-1' alt="" /> <span>2</span>
     </div>
     </OverlayTrigger>
     <OverlayTrigger key="top" placement="top" overlay={<Tooltip id={`tooltip-top`}>Car Category </Tooltip>}>

     <div className={`${CarsStyles.options} d-flex align-items-center mx-1`}>
     <img src={optionImg4} className='me-1' alt="" /> <span className='text-uppercase'>suv</span>
     </div>
     </OverlayTrigger>


</div>

          </div>
          <div className='px-3 d-flex justify-content-between'>
            <div className='text-start'>
              <h6 className={`${CarsStyles.features}`}>per day</h6>

              <div className=''>
               
                  <div className={`${CarsStyles.discountPrice}`}>
                  <p className={`mainColor fw-bold d-inline-block position-relative m-0 `}><span className={`${CarsStyles.currency}`}>AED</span> 120</p>
                </div>
               
                
                <p className={`${CarsStyles.price} m-0 `}><span className={`${CarsStyles.currency}`}>AED</span> 100</p>


              </div>

            </div>

            <div className='text-center'>
              <h6 className={`${CarsStyles.features}`}>per week</h6>

              <div className=''>
            
                  <div className={`${CarsStyles.discountPrice}`}>
                  <p className={`mainColor fw-bold d-inline-block position-relative m-0 `}><span className={`${CarsStyles.currency}`}>AED</span> 400</p>
                </div>
              
                
                <p className={`${CarsStyles.price} m-0 `}><span className={`${CarsStyles.currency}`}>AED</span> 300</p>


              </div>

            </div>

            <div className=' text-end'>
              <h6 className={`${CarsStyles.features} `}>per month</h6>
              <div className=''>
           
                  <div className={`${CarsStyles.discountPrice}`}>
                  <p className={`mainColor fw-bold d-inline-block position-relative m-0`}><span className={`${CarsStyles.currency}`}>AED </span>1000</p>
                </div>

              

                <p className={`${CarsStyles.price} m-0`}><span className={`${CarsStyles.currency}`}>AED</span> 900</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</div>
        </>
    )
}