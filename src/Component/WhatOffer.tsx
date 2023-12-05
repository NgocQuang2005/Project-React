import Offer from "./Offer"
import anh1 from './img/lighting-upgrades-thumb-G3.jpg'
import anh2 from './img/electrical-repairs-thumb-G1.jpg'
import anh3 from './img/surge-protection-thumb-G4.jpg'

const WhatOffer=()=>{
    return(
      <div className=' px-[50px] py-[50px] container'>
        <div className='text-center text-4xl font-bold pb-[20px]'>What We Offer</div>
        <ul className='max-w-screen-xl mx-auto flex  justify-between'>
          <li>
            <img src={anh1} alt="" />
            <Offer title='Lighting Upgrades' desc='Electrical panel maintenance, therefore, should be part of your regular routine.'/>
          </li>
          <li>
            <img src={anh2} alt="" />
            <Offer title='Electrical repairs' desc='Electrical repairs should always be handled by a professional electrician.'/>
          </li>
          <li>
            <img src={anh3} alt="" />
            <Offer title='Surge Protection' desc='An electrical surge can happen for a number of reasons, including lightning strikes..'/>
          </li>
        </ul>
    </div>
    )
}
export default WhatOffer