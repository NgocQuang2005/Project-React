import { FaPlay } from "react-icons/fa";
interface OfferType {
    title:string,
    desc:string
}

const Offer =({title, desc}: OfferType)=>{
    return(
        <div className='bg-white'>
        <div className='px-[20px] py-[20px]'>
          <div className='font-bold'>
            <a href="">{title}</a>
          </div>
          <div className='max-w-xs text-gray-500'>
            {desc}
          </div>
          <div className="flex items-center ">
            <div className="font-bold text-sm hover:text-orange-500">Read more</div> 
            <div className="text-orange-500 pt-[5px] pl-[5px] "><FaPlay size={10} /></div>
          </div>
        </div>
     </div>
    )
}
export default Offer