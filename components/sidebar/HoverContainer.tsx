import React from 'react'

type Props = {
    children: React.ReactNode,
    className?: string
} 

export default function HoverContainer({children, className}: Props) {
  return (
    <div  className=' p-3 transition-all rounded-full cursor-pointer hover:bg-gray-200 w-fit dark:bg-zinc-900' >{children}</div>
  )
}