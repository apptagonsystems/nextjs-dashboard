'use client'
import { SidebarContext, SidebarContextType } from '@/contexts/SidebarContext';
import { SidebarItemType } from '@/utils/types'
import Link from 'next/link';
import { useContext } from 'react'


function SidebarItem({title, path, icon,active, alert}: SidebarItemType) {
    const {expanded, setExpanded} = useContext(SidebarContext) as SidebarContextType;
  return (
    <Link href={path}>
       <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-gray-300 text-gray-800" :"hover:bg-gray-50 text-gray-600"}`}>
        {icon}
        <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{title}</span>
        {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-gray-400 ${expanded ? "" : "top-2"}`}/>}
        {
            !expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-gray-100 text-gray-600 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>{title}</div>
            )
        }
    </li>
    </Link>
   
  )
}

export default SidebarItem