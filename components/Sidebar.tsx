'use client'
import { cn } from '@/utils/utils'
import React, { useState } from 'react'

import {FaTwitter} from "react-icons/fa"
import {RiArrowLeftDoubleFill} from "react-icons/ri"

import Link from 'next/link'
import HoverContainer from './sidebar/HoverContainer'
import SideNavItem from './sidebar/SideNavItem'
import { title } from 'process'
import { SIDE_NAV_ITEMS } from '@/utils/constants'


type Props = {}

export default function  ({}: Props) {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true)

  return (
    <div className={cn("min-h-screen max-h-screen overflow-y-auto w-fit md:pr-8 pr-2 pt-2 flex flex-col gap-3 border-r-[1px] pl-[50px]", isSideBarOpen && "md:w-[300px]")}> 
    {/* LOGO */}
    <HoverContainer>
        <Link href="/">
            <FaTwitter className="text-5xl"/>
        </Link>
    </HoverContainer>
    {/* SIDEBAR ITEMS */}
    {SIDE_NAV_ITEMS.map((item, key) => (
        <HoverContainer key={key}>
            <SideNavItem title={item.title} icon={{icon:item.icon?.icon, fillIcon:item.icon?.fillIcon}} path={item.path} isSideBarOpen={isSideBarOpen }/>
        </HoverContainer>
    ))}
    
    {/* toggle button */}
    <div className={cn('flex w-full justify-end', !isSideBarOpen && "justify-start")}>
        <HoverContainer>
            <RiArrowLeftDoubleFill
            onClick={()=> setIsSideBarOpen(!isSideBarOpen)}
            className={cn("text-gray-400 transition-all text-4xl", !isSideBarOpen && "rotate-180")}/>
        </HoverContainer>
    </div>

    
    </div>
  )
} 