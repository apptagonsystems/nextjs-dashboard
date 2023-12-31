import {Icon} from '@iconify/react'

import {SideNavItemType} from './types'

import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";

import { AiOutlineProject } from "react-icons/ai";
import { AiTwotoneProject } from "react-icons/ai";

import { IoMailOutline } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";

import { IoSettingsOutline } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";



import { IoBarChartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { GoPackage } from "react-icons/go";
import { CiReceipt } from "react-icons/ci";
import { FiLifeBuoy } from "react-icons/fi";

export const SIDE_NAV_ITEMS: SideNavItemType[] = [
    {
        title:"Home",
        path:"/",
        icon: {
            icon: <GoHome/>,
            fillIcon: <GoHomeFill />
        }
    },
    {
        title:"Dashboards",
        path:"/dashboards/commerce",
        icon: {
            icon:<AiOutlineProject/>,
            fillIcon: <AiTwotoneProject/>
        },
        subMenu: true,
        subMenuItems: [
            {
                title:"Commerce",
                path:"/dashboards/commerce",
            },
            {
                title:"Web Design",
                path:"/projects/web-design",
            },
            {
                title:"Graphic Design",
                path:"/projects/graphic-design",
            }
        ]
    },
    {
        title:"Tables",
        path:"/tables",
        icon: {
            icon: <IoMailOutline/>,
            fillIcon: <IoMailSharp/>
        }
    },
    {
        title:"Applications",
        path:"/applications",
        icon: {
            icon: <IoSettingsOutline/>,
            fillIcon: <IoSettingsSharp/>
        },
        subMenu:true,
        subMenuItems: [
            {
                title:"Account",
                path:"/settings/account",
            },
            {
                title:"Privacy",
                path:"/settings/privacy",
            },
        ]
    },
    {
        title:"Pages",
        path:"/pages",
        icon: {
            icon: <IoSettingsOutline/>,
            fillIcon: <IoSettingsSharp/>
        },
        subMenu:true,
        subMenuItems: [
            {
                title:"Account",
                path:"/settings/account",
            },
            {
                title:"Privacy",
                path:"/settings/privacy",
            },
        ]
    },
    {
        title:"UIKit",
        path:"/uikit",
        icon: {
            icon: <IoSettingsOutline/>,
            fillIcon: <IoSettingsSharp/>
        },
        subMenu:true,
        subMenuItems: [
            {
                title:"Account",
                path:"/settings/account",
            },
            {
                title:"Privacy",
                path:"/settings/privacy",
            },
        ]
    },
    {
        title:"Users",
        path:"/users",
        icon: {
            icon: <IoSettingsOutline/>,
            fillIcon: <IoSettingsSharp/>
        },
        subMenu:true,
        subMenuItems: [
            {
                title:"Account",
                path:"/settings/account",
            },
            {
                title:"Privacy",
                path:"/settings/privacy",
            },
        ]
    },
    {
        title:"Forms",
        path:"/forms",
        icon: {
            icon: <IoSettingsOutline/>,
            fillIcon: <IoSettingsSharp/>
        },
        subMenu:true,
        subMenuItems: [
            {
                title:"Account",
                path:"/settings/account",
            },
            {
                title:"Privacy",
                path:"/settings/privacy",
            },
        ]
    },
    {
        title:"Inventory",
        path:"/",
        icon: {
            icon: <CiBoxList/>,
            fillIcon: <CiBoxList />
        }
    },
    {
        title:"Orders",
        path:"/",
        icon: {
            icon: <GoPackage/>,
            fillIcon: <GoPackage />
        }
    },
    {
        title:"Billing",
        path:"/",
        icon: {
            icon: <CiReceipt/>,
            fillIcon: <CiReceipt />
        }
    },
    {
        title:"Settings",
        path:"/",
        icon: {
            icon: <IoSettingsOutline/>,
            fillIcon: <IoSettingsOutline />
        }
    },
    {
        title:"Help",
        path:"/",
        icon: {
            icon: <FiLifeBuoy/>,
            fillIcon: <FiLifeBuoy />
        }
    },



]