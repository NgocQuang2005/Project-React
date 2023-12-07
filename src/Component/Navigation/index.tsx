import { navigations } from '../data/navigation'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav>
      <ul className='flex gap-x-6 text-lg items-center	'>
        {
           navigations.map((item)=>{
            return <li className='group relative font-bold pt-3 ' key={item.id} >
              <Link className='no-underline text-[White] text-lg hover:text-black' to={item.url}>
                  {item.name}
              </Link>
              {item.childs && item.childs.length > 0 ? (
                <div className='sub_child hidden group-hover:flex group-hover:flex-col text-slate-900 absolute z-50 bg-white w-44 py-2  font-normal	'>
                    {
                      item.childs.map((child)=>{
                        return <Link key={child.id} to={child.url} className='no-underline hover:bg-slate-200 text-[Black] pb-1 ml-1'>{child.name}</Link>
                      })
                    }
                </div>
              )
              : null
            }
            </li>
           }) 
        }
        <div className="pt-[20px]">
            <div className="flex border-2 rounded-lg bg-blue-400  items-center px-[10px] ">
                <FaShoppingCart /> <span className="ml-[5px]">0</span>
            </div>
        </div>
      </ul>
    </nav>
  )
}

export default Navigation