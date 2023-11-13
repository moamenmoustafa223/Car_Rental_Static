import React from 'react'
import Card from 'react-bootstrap/Card';
import cardImage from '../../assets/images/Ferrari_296-GTB_2023_23888_23888_17178874182-1_small.jpg'
import logoImage from '../../assets/images/ferrari (1).png'
import optionImg1 from '../../assets/images/car-door.png'
import optionImg2 from '../../assets/images/bag.png'
import optionImg3 from '../../assets/images/calendar.png'
import optionImg4 from '../../assets/images/suv.png'
import Badge from 'react-bootstrap/Badge';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';

import FeaturedCardStyles from "./FeaturedCard.module.css"
import { Link } from 'react-router-dom';

const FeaturedCard = () => {
  return (
    <>
     <Link to={`/carddetails`}>
     <Card className={`${FeaturedCardStyles.cardCustom} p-0 d-inline-block position-relative`} >
              <div className={`${FeaturedCardStyles.cardHeader} position-absolute p-3 d-flex justify-content-between align-items-center`}>
                <Badge className='py-2 px-3 rounded-4 mainBG text-uppercase'>Sports</Badge>
                <div className={`${FeaturedCardStyles.fav} p-2 rounded-circle mainColor d-flex justify-content-center align-items-center`}>
                  <i className="fa-regular fa-bookmark"></i>
                  <i className="fa-solid fa-bookmark"></i>
                </div>
              </div>
              <div className={`${FeaturedCardStyles.imgContainer} position-relative`}>
                <Card.Img variant="top" src={cardImage} className={`${FeaturedCardStyles.cardImg}`} />
                <div className={`${FeaturedCardStyles.imgLayer} position-absolute d-flex justify-content-center align-items-center`}>
                  <a className={`${FeaturedCardStyles.btnCustom}`} >Show More <i className="bi bi-arrow-up-right ms-2 fs-6 fw-bold"></i></a>
                </div>
              </div>
              <Card.Body>
                <div className="cardHeader d-flex align-items-center text-start mb-3">
                  <img src={logoImage} className='me-2 img-fluid' alt="" />
                  <div>
                    <h5 className={`${FeaturedCardStyles.cardTitle} m-0`}>Peugeot <span>2008</span> <span>2023</span></h5>
                    <p className={`${FeaturedCardStyles.vendorName} m-0`}>EuroLine</p>
                  </div>
                </div>
                <Card.Body className={`${FeaturedCardStyles.divider} p-0 text-center mb-3`}>
                <div className="d-flex justify-content-center py-3">

<OverlayTrigger key="top" placement="top" overlay={<Tooltip id={`tooltip-top`}>num of doors</Tooltip>}>

  <div className={`${FeaturedCardStyles.options} d-flex align-items-center mx-1`}>
     <img src={optionImg1} className='me-1 opacity-50' alt="" /> <span>4</span>
  </div>

</OverlayTrigger>
<OverlayTrigger key="top" placement="top" overlay={<Tooltip id={`tooltip-top`}>num of luggage bag</Tooltip>}>

     <div className={`${FeaturedCardStyles.options} d-flex align-items-center mx-1`}>
     <img src={optionImg2} className='me-1' alt="" /> <span>4</span>
     </div>
     </OverlayTrigger>
     <OverlayTrigger key="top" placement="top" overlay={<Tooltip id={`tooltip-top`}>minimum days of rent</Tooltip>}>

     <div className={`${FeaturedCardStyles.options} d-flex align-items-center mx-1`}>
     <img src={optionImg3} className='me-1' alt="" /> <span>2</span>
     </div>
     </OverlayTrigger>
     <OverlayTrigger key="top" placement="top" overlay={<Tooltip id={`tooltip-top`}>Car Category </Tooltip>}>

     <div className={`${FeaturedCardStyles.options} d-flex align-items-center mx-1`}>
     <img src={optionImg4} className='me-1' alt="" /> <span className='text-uppercase'>suv</span>
     </div>
     </OverlayTrigger>


</div>

                </Card.Body>
                <Card.Text className='  d-flex justify-content-between'>
                  <div className='text-start'>

                    <h6 className={`${FeaturedCardStyles.features}`}>per day</h6>
                    <div className={`${FeaturedCardStyles.discountPrice} d-none `}>
                      <p className={`mainColor fw-bold d-inline-block position-relative m-0 `}><span className={`${FeaturedCardStyles.currency}`}>AED</span> 180</p>
                    </div>
                    <p className={`${FeaturedCardStyles.price} m-0`}><span className={`${FeaturedCardStyles.currency}`}>AED</span> 120</p>
                    
                  </div>
                  <div className='text-center'>
                    <h6 className={`${FeaturedCardStyles.features}`}>per week</h6>
                    <div className={`${FeaturedCardStyles.discountPrice} d-none `}>
                      <p className={`mainColor fw-bold d-inline-block position-relative m-0 `}><span className={`${FeaturedCardStyles.currency}`}>AED</span> 180</p>
                    </div>
                    <p className={`${FeaturedCardStyles.price} m-0`}><span className={`${FeaturedCardStyles.currency}`}>AED</span> 120</p>
                  </div>
                  <div className=' text-end'>
                    <h6 className={`${FeaturedCardStyles.features} `}>per month</h6>
                    <div className={`${FeaturedCardStyles.discountPrice}  `}>
                      <p className={`mainColor fw-bold d-inline-block position-relative m-0 `}><span className={`${FeaturedCardStyles.currency}`}>AED</span> 1800</p>
                    </div>
                    <p className={`${FeaturedCardStyles.price} m-0`}><span className={`${FeaturedCardStyles.currency}`}>AED</span> 1200</p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
     </Link>
           

    </>
  )
}

export default FeaturedCard;
