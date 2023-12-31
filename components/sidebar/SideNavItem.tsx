'use client'
import { SideNavItemType } from '@/utils/types'
import Link from 'next/link'
import React from 'react'
import { FaAccessibleIcon } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/utils'
import { useAutoAnimate } from '@formkit/auto-animate/react'



export default function SideNavItem(props : SideNavItemType & {isSideBarOpen: boolean}) {
  const pathname = usePathname();
  const [animationParent] =  useAutoAnimate();
  const isActivePage = pathname === props.path; 
  return (
    <Link 
    ref={animationParent}
    href={props.path } className=' flex gap-2 items-center cursor-pointer '>
        {/* icon */}
        <div className='w-[35px] h-[35px] text-3xl '>
            {/* <FaAccessibleIcon/> */}
            {isActivePage ? props.icon?.fillIcon : props.icon?.icon}
        </div> 
        {/* label */}
        { props.isSideBarOpen && ( <p className={cn("text-xl hidden md:block transition-all", isActivePage && 'font-bold')}>{props.title}</p>)}
       
    </Link>
  )
}