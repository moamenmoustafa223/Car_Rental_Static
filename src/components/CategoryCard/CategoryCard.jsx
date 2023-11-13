import React, { useEffect, useState } from 'react'
import CategoryCardStyles from "./CategoryCard.module.css"
import categoryImage1 from '../../assets/images/sports2.png'
import categoryImage2 from '../../assets/images/suv2.png'
import categoryImage3 from '../../assets/images/luxury2.png'
import categoryImage4 from '../../assets/images/classic-car2.png'

import { listCategories } from '../../api'

const CategoryCard = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const setData = async () => {
      const categories = await listCategories()
      setCategories(categories)
    }
    setData().catch((err) => console.log(err))
  }, [])

  return (
    <>
      <div className="container">
        <div className="row g-4">
       
               <div className="col-md-4 col-lg-3">
               <div className= {`${CategoryCardStyles.categoryCard}  p-4 text-center rounded-4`}>
                   <img src={categoryImage2} alt="" className="img-fluid mb-3"/>
                   <h3 className={`${CategoryCardStyles.categoryName}`}>suv</h3>
               </div>
             </div>
             <div className="col-md-4 col-lg-3">
               <div className= {`${CategoryCardStyles.categoryCard}  p-4 text-center rounded-4`}>
                   <img src={categoryImage1} alt="" className="img-fluid mb-3"/>
                   <h3 className={`${CategoryCardStyles.categoryName}`}>sport</h3>
               </div>
             </div>
             <div className="col-md-4 col-lg-3">
               <div className= {`${CategoryCardStyles.categoryCard}  p-4 text-center rounded-4`}>
                   <img src={categoryImage3} alt="" className="img-fluid mb-3"/>
                   <h3 className={`${CategoryCardStyles.categoryName}`}>luxury</h3>
               </div>
             </div>
             <div className="col-md-4 col-lg-3">
               <div className= {`${CategoryCardStyles.categoryCard}  p-4 text-center rounded-4`}>
                   <img src={categoryImage4} alt="" className="img-fluid mb-3"/>
                   <h3 className={`${CategoryCardStyles.categoryName}`}>classic</h3>
               </div>
             </div>
         
        </div>
      </div>
    </>
  )
}

export default CategoryCard
