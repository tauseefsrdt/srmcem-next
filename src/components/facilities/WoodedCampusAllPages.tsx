import React from 'react'
import { WoodImages } from '../../data/CustomFacilitiesData'
import Classes from "../../utils/styles/Global.module.css";
const WoodedCampusAllPages: React.FC = () => {
  return (
    <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
      <h2 className="text-3xl lg:text-4xl text-center leading-8 pr-4 p-5 py-12 font-bold">Wooded Campus</h2>
      <div className="abhivyakti_grid_all mt-10">
        {WoodImages.map((item) => (
          <div className='border border-gray-200 p-3 rounded-md hover:border-[#ffb703] transition-all duration-200'>
            <img className="w-full h-full object-cover rounded-md " src={item.imgSrc} alt="Gallery" />

          </div>
        ))}
      </div>

    </div>
  )
}

export default WoodedCampusAllPages
