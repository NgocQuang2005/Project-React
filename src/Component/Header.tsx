import React , {useState} from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
const MenuItem = ({ title, children , icon }  : { title?: string; children: React.ReactNode ,icon?: React.ReactNode} ) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="menu-item block px-[18px] py-[20px] hover:text-black  "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center	gap-x-0.5	font-bold">
      {title}
      {icon}
      </div>
      {isHovered && <ul className="menu-dropdown ">{children}</ul>}
    </li>
  );
};

const Header =()=>{
    return(
        <div className='bg-orange-500 '>
            <nav className='max-w-screen-xl mx-auto flex justify-between container'>
                <h1 className='text-4xl py-[10px] font-bold text-white mb-0'>Electrician</h1>
                <ul className='flex text-white text-lg mb-0'>
                  <li className='block px-[18px] py-[20px] text-black hover:text-black font-bold'>Home</li>
                  <MenuItem title="Blog" icon={<FaChevronDown />}>
                      <ul className="absolute bg-white hover:block w-44 z-50 pl-0 ">
                          <li className="pb-[8px] px-[10px] text-lg	hover:bg-slate-200"><a href="" className="no-underline text-black">Tech</a></li>
                          <li className="pb-[8px] px-[10px]  text-lg	hover:bg-slate-200"><a href="" className="no-underline text-black">Sport</a></li>
                          <li className="pb-[8px] px-[10px] text-lg	hover:bg-slate-200"><a href="" className="no-underline text-black">Fashion</a></li>
                      </ul>
                  </MenuItem>
                  <li className='block px-[18px] py-[20px] hover:text-black font-bold'>Category</li>
                  <li className='block px-[18px] py-[20px] hover:text-black font-bold'>Product</li>
                  <li className='block px-[18px] py-[20px] hover:text-black font-bold'>Login</li>
                  <li className='block px-[18px] py-[20px] hover:text-black font-bold'>Customer</li>
                  <div className="pt-[20px]">
                    <div className="flex border-2 rounded-lg bg-blue-400  items-center px-[10px] ">
                      <FaShoppingCart /> <span className="ml-[5px]">0</span>
                    </div>
                  </div>
                </ul>
            </nav>
        </div>
      
    )
}
export default Header