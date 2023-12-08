import Offer from "../Inheritance/Offer";
import anh1 from '../img/lighting-upgrades-thumb-G3.jpg';
import anh2 from '../img/electrical-repairs-thumb-G1.jpg';
import anh3 from '../img/surge-protection-thumb-G4.jpg';

const WhatOffer = () => {
  return (
    <div className='py-10 container mx-auto'>
      <div className='text-center text-4xl font-bold pb-5'>What We Offer</div>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <li>
          <img src={anh1} alt="Lighting Upgrades" className='w-full h-auto' />
          <Offer title='Lighting Upgrades' desc='Electrical panel maintenance, therefore, should be part of your regular routine.'/>
        </li>
        <li>
          <img src={anh2} alt="Electrical repairs" className='w-full h-auto' />
          <Offer title='Electrical repairs' desc='Electrical repairs should always be handled by a professional electrician.'/>
        </li>
        <li>
          <img src={anh3} alt="Surge Protection" className='w-full h-auto' />
          <Offer title='Surge Protection' desc='An electrical surge can happen for a number of reasons, including lightning strikes..' />
        </li>
      </ul>
    </div>
  );
};

export default WhatOffer;
