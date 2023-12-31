import React from 'react'

type Props = {}

export default function Tooltip({children}:{children: React.ReactNode}) {
  return (
    <div className='absolute inset-y-0 left-12 hidden group-hover:flex items-center '>
        <div className='relative whitespace-nowrap px-4 py-4 bg-white rounded-md text-sm font-semibold drop-shadow-lg text-gray-900'>
            <div className=' absolute inset-y-0 flex items-center -left-1'>
                <div className='h-2 w-2 bg-white rotate-45'></div>
            </div>
            {children}
        </div>
    </div>
  )
}