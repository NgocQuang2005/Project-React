import { IoCall } from "react-icons/io5";
import Suachua from "./img/category-img-1.jpg"
const BodyIndex =()=>{
    return(
    <div className='max-w-screen-xl mx-auto flex my-5 container'>
      <div>
          <img width={580} height={397} src={Suachua} alt="" />
      </div>
      <div className='pl-[50px] py-[50px] '>
        <div className='font-bold text-orange-500 text-xl'>
            Our Services
        </div>
        <div className='font-bold text-4xl leading-loose font-mono '>
            Responsive & Professional
        </div>
        <div className='max-w-xl text-base text-gray-500'>
            We go the extra mile on every project. 
            The value we provide clients comes from our level of skill and performance, as well as our knowledge and professionalism. 
            Rest assured, we put the same level of energy into every project we take on.
        </div>
        <div className='pt-[60px] font-bold'>
            Call us today
        </div>
        <div className='text-orange-500 flex items-center text-2xl font-bold '>
            <IoCall /> <div>1900-111000</div> 
        </div>
        <div className='max-w-xl text-base text-gray-500'>
            We're available 24/7, 365 days a year.
        </div>
        </div>
    </div>
    )
}
export default BodyIndex
