'use client'
import { SidebarContext, SidebarContextType } from '@/contexts/SidebarContext';
import { SidebarItemType } from '@/utils/types'
import Link from 'next/link';
import { useContext, useState } from 'react'

// ICONS
import { FaChevronDown } from "react-icons/fa";


function SidebarItem({title, path, icon,active, alert,subMenu, subMenuItems}: SidebarItemType) {
    const {expanded, setExpanded} = useContext(SidebarContext) as SidebarContextType;
    const  [subMenuOpened, setSubMenuOpened] = useState(false)
  return (

    <div>
    
   
      <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-gray-300 text-gray-800" :"hover:bg-gray-50 text-gray-600"}`} onClick={() => setSubMenuOpened(!subMenuOpened)}>
          {icon}

          <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{title}</span>

          {subMenu && (<FaChevronDown className={`${subMenuOpened && "rotate-180"}`}  />)}
          {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-gray-400 ${expanded ? "" : "top-2"}`}/>}
          {
              !expanded && (
                  <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-gray-100 text-gray-600 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>{title}</div>
              )
          }
        </li>
    
      {subMenuItems && subMenuOpened && (
        <ul>
          {subMenuItems?.map((item, index) => (
             <Link href={path} >
                <li key={index} className='flex pl-10 cursor-pointer text-center text-sm text-gray-400 py-1 hover:bg-gray-50 hover:text-gray-700'>{item.title}</li>
             </Link>
            

          ))}
        </ul>
      )}

    </div>
   
  )
}

export default SidebarItem