import { IoCall } from "react-icons/io5";
import Suachua from "../img/category-img-1.jpg";

const BodyIndex = () => {
  return (
    <div className='max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row my-5 container'>
      <div className='md:w-1/2 md:pr-8'>
        <img className='w-full h-auto' src={Suachua} alt="Service Image" />
      </div>
      <div className='md:w-1/2 pl-0 md:pl-[50px] py-5'>
        <div className='font-bold text-orange-500 text-xl'>
          Our Services
        </div>
        <div className='font-bold text-4xl leading-loose font-mono'>
          Responsive & Professional
        </div>
        <div className='max-w-xl text-base text-gray-500'>
          We go the extra mile on every project. 
          The value we provide clients comes from our level of skill and performance, as well as our knowledge and professionalism. 
          Rest assured, we put the same level of energy into every project we take on.
        </div>
        <div className='pt-8 font-bold'>
          Call us today
        </div>
        <div className='text-orange-500 flex items-center text-2xl font-bold'>
          <IoCall /> <div className='ml-2'>1900-111000</div> 
        </div>
        <div className='max-w-xl text-base text-gray-500'>
          We're available 24/7, 365 days a year.
        </div>
      </div>
    </div>
  );
};

export default BodyIndex;
